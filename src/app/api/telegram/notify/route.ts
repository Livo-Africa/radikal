// src/app/api/telegram/notify/route.ts - UPDATED FILE
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      orderId,
      customer,
      package: pkg,
      amount,
      urgent = false,
      shootType,
      outfitsCount = 0,
      specialRequests = '',
      addOns = [],
      stylePreferences = {}
    } = body;

    console.log('📢 Sending enhanced Telegram notification for order:', orderId);

    // Telegram Bot Configuration
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('❌ Telegram environment variables not set');
      return NextResponse.json(
        { success: false, error: 'Telegram configuration missing' },
        { status: 500 }
      );
    }

    // Format add-ons for display
    const addOnsList = Array.isArray(addOns) && addOns.length > 0 
      ? addOns.map((addOn: string) => `• ${addOn}`).join('\n')
      : 'None';

    // Format style preferences
    const styleDetails = stylePreferences && Object.keys(stylePreferences).length > 0
      ? Object.entries(stylePreferences)
          .map(([key, value]: [string, any]) => 
            value?.selectedName ? `• ${key}: ${value.selectedName}` : ''
          )
          .filter(Boolean)
          .join('\n')
      : 'Not specified';

    // Enhanced message format with all order details
    const message = `
🎉 *RADIKAL - NEW ORDER RECEIVED* 🎉

*Order Details:*
🆔 Order ID: \`${orderId}\`
📞 Customer: \`${customer}\`
🎯 Shoot Type: ${shootType || 'Not specified'}
📦 Package: ${pkg}
💰 Amount: ₵${amount}
🚨 Priority: ${urgent ? '🚨 URGENT - RUSH DELIVERY' : '📦 Standard Delivery'}

*Outfit Details:*
👗 Outfits Selected: ${outfitsCount}

*Style Preferences:*
${styleDetails}

*Add-ons Selected:*
${addOnsList}

*Special Requests:*
${specialRequests || 'None'}

*Order Timeline:*
🕒 Ordered: ${new Date().toLocaleString('en-GH', { 
  timeZone: 'Africa/Accra',
  dateStyle: 'medium',
  timeStyle: 'medium'
})}
⏱️ Expected Delivery: ${urgent ? '1 HOUR ⚡' : '1-3 hours'}

${urgent ? '⚡ *PRIORITY PROCESSING REQUIRED - RUSH ORDER* ⚡' : ''}

💬 *CUSTOMER IS WAITING FOR DELIVERY - PROCESS IMMEDIATELY* 💬
    `.trim();

    // Send message to Telegram
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
          parse_mode: 'Markdown',
          disable_notification: false,
        }),
      }
    );

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error('❌ Telegram API error:', telegramResult);
      throw new Error(telegramResult.description || 'Telegram API error');
    }

    console.log('✅ Enhanced Telegram notification sent successfully');
    console.log('📝 Message ID:', telegramResult.result.message_id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enhanced Telegram notification sent',
        messageId: telegramResult.result.message_id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error sending enhanced Telegram notification:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send Telegram notification',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: Test endpoint (GET)
export async function GET() {
  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json(
        { error: 'Telegram environment variables not set' },
        { status: 500 }
      );
    }

    // Test bot connection by getting bot info
    const botInfoResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`
    );

    const botInfo = await botInfoResponse.json();

    if (!botInfo.ok) {
      throw new Error('Failed to connect to Telegram Bot');
    }

    return NextResponse.json({
      success: true,
      bot: botInfo.result,
      chatId: TELEGRAM_CHAT_ID,
      message: 'Telegram bot is connected and ready'
    });

  } catch (error) {
    console.error('Telegram test error:', error);
    return NextResponse.json(
      { error: 'Telegram bot test failed' },
      { status: 500 }
    );
  }
}