import { useEffect, useRef } from 'react';

export const useAbandonmentTracking = (formData: any, currentStep: number) => {
  const sessionIdRef = useRef<string>('');
  const hasPhoneNumber = formData?.whatsappNumber && formData.whatsappNumber !== '';
  const triggeredRef = useRef<string[]>([]); // Track already triggered reasons

  useEffect(() => {
    // Initialize session ID
    if (typeof window !== 'undefined') {
      let sessionId = localStorage.getItem('radikal_session_id');
      if (!sessionId) {
        sessionId = 'radikal_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('radikal_session_id', sessionId);
      }
      sessionIdRef.current = sessionId;
    }
  }, []);

  useEffect(() => {
    // Save progress to localStorage
    if (typeof window !== 'undefined' && currentStep >= 1) {
      const progressData = {
        sessionId: sessionIdRef.current,
        formData,
        currentStep,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem('radikal_booking_progress', JSON.stringify(progressData));
    }
  }, [formData, currentStep]);

  const trackAbandonment = async (reason: string = 'user_navigation') => {
    // Prevent duplicate tracking for same reason
    if (triggeredRef.current.includes(reason)) {
      console.log('🔄 Already tracked this abandonment reason:', reason);
      return;
    }

    // Only track if user provided phone number (after Step 3)
    if (!hasPhoneNumber || currentStep < 3) {
      console.log('❌ NOT TRACKING: No phone or before step 3', {
        hasPhoneNumber,
        currentStep,
        reason
      });
      return;
    }

    console.log('🔍 TRACKING ABANDONMENT:', {
      reason,
      step: currentStep,
      phone: formData.whatsappNumber,
      sessionId: sessionIdRef.current
    });

    triggeredRef.current.push(reason);

    try {
      const abandonmentData = {
        sessionId: sessionIdRef.current,
        currentStep,
        formData,
        timestamp: new Date().toISOString(),
        reason
      };

      // Use sendBeacon for more reliable tracking during page unload
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(abandonmentData)], { type: 'application/json' });
        const success = navigator.sendBeacon('/api/abandonment/track', blob);
        console.log('📡 SendBeacon result:', success);
      } else {
        // Fallback to fetch
        await fetch('/api/abandonment/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(abandonmentData),
        });
      }

      console.log('✅ Abandonment tracked:', { reason, step: currentStep });
    } catch (error) {
      console.error('❌ Failed to track abandonment:', error);
    }
  };

  // 🔥 ENHANCED DETECTION METHODS

  // 1. Page Unload Detection (user closes browser/tab)
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasPhoneNumber && currentStep >= 3 && currentStep < 7) {
        trackAbandonment('browser_closed');
        // Note: This might not complete due to page unload, but we try
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasPhoneNumber, currentStep]);

  // 2. Route Change Detection (user navigates to other pages)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && hasPhoneNumber && currentStep >= 3 && currentStep < 7) {
        // Check if it's an external navigation (not within style journey)
        const href = link.getAttribute('href');
        if (href && !href.includes('/style-journey')) {
          trackAbandonment('navigated_to_' + href.replace(/\//g, '_'));
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [hasPhoneNumber, currentStep]);

  // 3. Visibility Change Detection (user switches tabs/minimizes)
  useEffect(() => {
    let hiddenStartTime: number;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page became hidden (user switched tabs or minimized)
        hiddenStartTime = Date.now();
      } else {
        // Page became visible again
        if (hiddenStartTime && hasPhoneNumber && currentStep >= 3 && currentStep < 7) {
          const hiddenDuration = Date.now() - hiddenStartTime;
          // If user was away for more than 30 seconds, track as abandonment
          if (hiddenDuration > 30000) {
            trackAbandonment('tab_switch_inactivity');
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [hasPhoneNumber, currentStep]);

  // 4. Inactivity Timeout (user doesn't interact for 2 minutes)
  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      if (hasPhoneNumber && currentStep >= 3 && currentStep < 7) {
        inactivityTimer = setTimeout(() => {
          trackAbandonment('inactivity_timeout_2min');
        }, 120000); // 2 minutes
      }
    };

    // Reset timer on user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    resetTimer(); // Start the timer

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [hasPhoneNumber, currentStep]);

  // 5. Browser Back Button Detection
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (hasPhoneNumber && currentStep >= 3 && currentStep < 7) {
        trackAbandonment('browser_back_button');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [hasPhoneNumber, currentStep]);

  return {
    trackAbandonment,
    sessionId: sessionIdRef.current,
    hasPhoneNumber
  };
};