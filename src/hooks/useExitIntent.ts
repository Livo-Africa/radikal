import { useEffect, useRef } from 'react';

export const useExitIntent = (onTrigger: () => void, enabled: boolean = true) => {
  const triggered = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !triggered.current) {
        triggered.current = true;
        onTrigger();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onTrigger, enabled]);
};