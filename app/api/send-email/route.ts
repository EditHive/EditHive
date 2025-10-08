import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create formatted email content for logging and potential webhook
    const emailContent = `
=== NEW CONTACT FORM SUBMISSION ===
Time: ${new Date().toLocaleString()}
Name: ${name}
Email: ${email}
Message: ${message}
=====================================
`

    // Log to server console (visible in Vercel function logs)
    console.log(emailContent)

    // Use ONLY the main Web3Forms account to ensure emails go to edithiveproductions09@gmail.com
    // The other accounts were sending emails to different addresses
    try {
      console.log('Sending email via main Web3Forms account...')
      
      const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '289262d4-40ad-46f9-997a-91082d879d26', // Main account only
          subject: `🚨 NEW LEAD: Contact Form - ${name} | EditHive`,
          email: email, // Customer's email for reply-to
          name: name,
          message: message,
          to: 'edithiveproductions09@gmail.com', // Your email
          from_name: 'EditHive Website',
          replyto: email, // Customer's email so you can reply
        })
      })

      const result = await web3FormsResponse.json()
      
      if (web3FormsResponse.ok && result.success) {
        console.log('✅ Email sent successfully to edithiveproductions09@gmail.com')
        return NextResponse.json({ 
          success: true, 
          message: 'Message sent successfully to your EditHive account!' 
        })
      } else {
        console.log('❌ Web3Forms failed:', result)
      }
    } catch (error) {
      console.error('Web3Forms error:', error)
    }

    // Fallback: Try Resend if Web3Forms fails and API key is provided
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'EditHive Contact <noreply@yourdomain.com>',
            to: ['edithiveproductions09@gmail.com'],
            reply_to: email,
            subject: `🚨 NEW LEAD: ${name} | EditHive Contact Form`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <div style="background: linear-gradient(135deg, #d4af37, #f5e08e); padding: 20px; border-radius: 10px 10px 0 0;">
                  <h1 style="color: #000; margin: 0; text-align: center;">🚨 NEW LEAD ALERT! 🚨</h1>
                  <p style="color: #000; margin: 10px 0 0 0; text-align: center; font-weight: bold;">EditHive Contact Form</p>
                </div>
                <div style="background: #f9f9f9; padding: 30px; border: 1px solid #ddd;">
                  <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 5px;">Contact Details</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                  
                  <h2 style="color: #333; border-bottom: 2px solid #d4af37; padding-bottom: 5px;">Message</h2>
                  <div style="background: white; padding: 20px; border-left: 4px solid #d4af37;">
                    <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                  </div>
                </div>
              </div>
            `
          })
        })

        if (resendResponse.ok) {
          return NextResponse.json({ 
            success: true, 
            message: 'Message sent successfully via Resend!' 
          })
        }
      } catch (error) {
        console.error('Resend API error:', error)
      }
    }

    // For now, just return success and log to console
    // This ensures the form works even without email service configured
    return NextResponse.json({ 
      success: true, 
      message: 'Message received! Check your server logs or add an email service for delivery.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process message. Please try again.' },
      { status: 500 }
    )
  }
}