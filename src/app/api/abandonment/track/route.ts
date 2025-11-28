//src/app/api/abandonment/track/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Helper function to escape Markdown characters
const escapeMarkdown = (text: string): string => {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      sessionId,
      currentStep,
      formData,
      timestamp,
      reason = 'unknown'
    } = body;

    console.log('🚨 ABANDONMENT DETECTED:', { 
      sessionId, 
      currentStep, 
      reason,
      hasPhone: !!formData?.whatsappNumber 
    });

    // Telegram Bot Configuration (SECOND BOT)
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_ABANDONMENT_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_ABANDONMENT_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('❌ Abandonment Telegram environment variables not set');
      return NextResponse.json(
        { success: false, error: 'Abandonment tracking configuration missing' },
        { status: 500 }
      );
    }

    // Extract relevant data and ESCAPE ALL TEXT
    const phoneNumber = escapeMarkdown(formData?.whatsappNumber || 'Not provided yet');
    const shootType = escapeMarkdown(formData?.shootTypeName || formData?.shootType || 'Not selected');
    const packageName = escapeMarkdown(formData?.package?.name || 'Not selected');
    const progress = `${currentStep}/7`;

    // Map reasons to friendly names
    const reasonMap: { [key: string]: string } = {
      'browser_closed': 'Closed browser/tab',
      'browser_back_button': 'Used browser back button',
      'back_button_step_3': 'Pressed back button from Step 3',
      'back_button_step_4': 'Pressed back button from Step 4', 
      'back_button_step_5': 'Pressed back button from Step 5',
      'back_button_step_6': 'Pressed back button from Step 6',
      'tab_switch_inactivity': 'Switched tabs for 30+ seconds',
      'inactivity_timeout_2min': 'No activity for 2 minutes',
      'navigated_to_home': 'Clicked homepage link',
      'navigated_to_services': 'Clicked services link',
      'skipped_styling_step': 'Skipped styling step',
      'page_unload': 'Page unloaded'
    };

    const friendlyReason = escapeMarkdown(reasonMap[reason] || reason);

    // Format the abandonment message with PROPER Markdown escaping
    const message = `
🚨 *RADIKAL BOOKING ABANDONED* 🚨

*Progress:* ${progress}
*Phone:* \`${phoneNumber}\`
*Shoot Type:* ${shootType}
*Package:* ${packageName}
*Reason:* ${friendlyReason}

*Timestamp:* ${escapeMarkdown(new Date(timestamp).toLocaleString('en-GH', { 
  timeZone: 'Africa/Accra',
  dateStyle: 'medium',
  timeStyle: 'medium'
}))}

*Session ID:* \`${sessionId}\`

💬 *FOLLOW\\-UP REQUIRED* 💬
    `.trim();

    console.log('📤 Sending Telegram message:', message);

    // Send message to Telegram (SECOND BOT)
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'MarkdownV2',
          disable_notification: false,
        }),
      }
    );

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error('❌ Abandonment Telegram API error:', telegramResult);
      
      // Try with HTML parsing as fallback
      const htmlMessage = `
<b>🚨 RADIKAL BOOKING ABANDONED 🚨</b>

<b>Progress:</b> ${progress}
<b>Phone:</b> <code>${phoneNumber}</code>
<b>Shoot Type:</b> ${shootType}
<b>Package:</b> ${packageName}
<b>Reason:</b> ${friendlyReason}

<b>Timestamp:</b> ${new Date(timestamp).toLocaleString('en-GH', { 
  timeZone: 'Africa/Accra',
  dateStyle: 'medium',
  timeStyle: 'medium'
})}

<b>Session ID:</b> <code>${sessionId}</code>

💬 <b>FOLLOW-UP REQUIRED</b> 💬
      `.trim();

      const fallbackResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: htmlMessage,
            parse_mode: 'HTML',
            disable_notification: false,
          }),
        }
      );

      const fallbackResult = await fallbackResponse.json();

      if (!fallbackResponse.ok || !fallbackResult.ok) {
        throw new Error(`Markdown: ${telegramResult.description}, HTML: ${fallbackResult.description}`);
      }

      console.log('✅ Abandonment alert sent to Telegram (HTML fallback)');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Abandonment tracked successfully (HTML fallback)',
          messageId: fallbackResult.result.message_id
        },
        { status: 200 }
      );
    }

    console.log('✅ Abandonment alert sent to Telegram');
    console.log('📝 Message ID:', telegramResult.result.message_id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Abandonment tracked successfully',
        messageId: telegramResult.result.message_id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error tracking abandonment:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to track abandonment',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}