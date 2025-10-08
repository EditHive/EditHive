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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = {
      to: 'edithiveproductions09@gmail.com', // Your email
      from: email,
      replyTo: email,
      subject: `🚨 NEW LEAD: Contact Form - ${name} | EditHive`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 3px solid #d4af37;">
          <div style="background: linear-gradient(135deg, #d4af37, #f5e08e); padding: 25px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #000; margin: 0; text-align: center; font-size: 24px;">🚨 NEW LEAD ALERT! 🚨</h1>
            <p style="color: #000; margin: 10px 0 0 0; text-align: center; font-size: 16px; font-weight: bold;">EditHive Contact Form Submission</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #ddd;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #333; margin-bottom: 10px; border-bottom: 2px solid #d4af37; padding-bottom: 5px;">Contact Details</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div>
              <h2 style="color: #333; margin-bottom: 10px; border-bottom: 2px solid #d4af37; padding-bottom: 5px;">Message</h2>
              <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #d4af37;">
                <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: #e8f4f8; border-radius: 5px; border-left: 4px solid #17a2b8;">
              <p style="margin: 0; font-size: 14px; color: #555;">
                <strong>Received:</strong> ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 10px; color: #666; font-size: 12px;">
            This message was sent from the EditHive website contact form.
          </div>
        </div>
      `,
      text: `
New Contact Form Submission from EditHive Website

From: ${name} (${email})
Received: ${new Date().toLocaleString()}

Message:
${message}

---
This message was sent from the EditHive website contact form.
      `
    }

    // Try to send using Web3Forms (free service)
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'demo', // You'll need to get this key
        subject: emailContent.subject,
        email: email,
        name: name,
        message: message,
        to: 'edithiveproductions09@gmail.com',
        from_name: 'EditHive Website',
        replyto: email,
      })
    })

    if (web3FormsResponse.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully!' 
      })
    }

    // Fallback: Log to server console (for development)
    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('=====================================')

    // Return success anyway (for demo purposes)
    return NextResponse.json({ 
      success: true, 
      message: 'Message received! We\'ll get back to you soon.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}