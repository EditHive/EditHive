import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Log the submission
    const timestamp = new Date().toLocaleString()
    console.log('='.repeat(60))
    console.log('🚨 NEW EDITHIVE LEAD!')
    console.log('='.repeat(60))
    console.log(`📧 TO: edithiveproductions09@gmail.com`)
    console.log(`👤 FROM: ${name} <${email}>`)
    console.log(`🕒 TIME: ${timestamp}`)
    console.log(`📝 MESSAGE: ${message}`)
    console.log('='.repeat(60))

    // Try Resend API if available
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'EditHive Contact <noreply@resend.dev>',
            to: 'edithiveproductions09@gmail.com',
            reply_to: email,
            subject: `🚨 NEW LEAD: ${name} | EditHive Contact Form`,
            html: `
              <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
                <div style="background: linear-gradient(135deg, #d4af37, #f5e08e); padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
                  <h1 style="margin: 0; color: #000; font-size: 24px;">🚨 NEW LEAD ALERT!</h1>
                  <p style="margin: 10px 0 0 0; color: #000; font-weight: bold;">EditHive Contact Form</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">
                  <div style="margin-bottom: 25px;">
                    <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 8px; margin-bottom: 15px;">📞 Contact Information</h2>
                    <p style="margin: 8px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 8px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a></p>
                    <p style="margin: 8px 0; font-size: 16px;"><strong>Received:</strong> ${timestamp}</p>
                  </div>
                  
                  <div>
                    <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 8px; margin-bottom: 15px;">💬 Message</h2>
                    <div style="background: white; padding: 20px; border-left: 4px solid #d4af37; border-radius: 4px;">
                      <p style="margin: 0; line-height: 1.6; font-size: 16px; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                  </div>
                  
                  <div style="margin-top: 25px; padding: 15px; background: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px;">
                    <p style="margin: 0; font-size: 14px; color: #1565c0;">
                      <strong>💡 Quick Reply:</strong> Simply reply to this email to respond directly to ${name}
                    </p>
                  </div>
                </div>
              </div>
            `
          })
        })

        const result = await resendResponse.json()

        if (resendResponse.ok) {
          console.log('✅ Email sent successfully via Resend!')
          return NextResponse.json({ 
            success: true, 
            message: 'Message sent successfully! Check your email.' 
          })
        } else {
          console.log('❌ Resend failed:', result)
        }
      } catch (error) {
        console.error('Resend error:', error)
      }
    } else {
      console.log('⚠️  No Resend API key found. Add RESEND_API_KEY to environment variables.')
    }

    // Fallback success (form data is logged)
    return NextResponse.json({ 
      success: true, 
      message: 'Message received! Add email service for delivery to inbox.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process message. Please try again.' },
      { status: 500 }
    )
  }
}