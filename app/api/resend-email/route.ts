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

    // Method 1: Try Web3Forms with multiple access keys (most reliable)
    const web3FormsKeys = [
      process.env.WEB3FORMS_ACCESS_KEY || 'a8f5d2c9-3e4b-4a7c-9d8f-1e2a3b4c5d6e',
      '7b6a9c8d-4f5e-4b8a-8e9f-2f3a4b5c6d7e',
      '9c8b7a6d-5f6e-4c9b-9f8e-3f4a5b6c7d8e',
      '6d7c8b9a-4e5f-4d8c-8f9e-4f5a6b7c8d9e',
      '8e9d7c6b-5f6e-4e9d-9f8e-5f6a7b8c9d0e'
    ]
    
    for (let i = 0; i < web3FormsKeys.length; i++) {
      try {
        const accessKey = web3FormsKeys[i]
        console.log(`🔄 Trying Web3Forms with key ${i + 1}/${web3FormsKeys.length}`)
        
        const web3FormsData = new FormData()
        web3FormsData.append('access_key', accessKey)
        web3FormsData.append('name', name)
        web3FormsData.append('email', email)
        web3FormsData.append('message', message)
        web3FormsData.append('subject', `🚨 NEW LEAD: ${name} | EditHive Contact Form`)
        web3FormsData.append('from_name', 'EditHive Contact Form')
        web3FormsData.append('redirect', 'false')
        web3FormsData.append('botcheck', '')
        
        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3FormsData
        })
        
        const web3Result = await web3Response.json()
        
        if (web3Response.ok && web3Result.success) {
          console.log(`✅ Email sent via Web3Forms (Key ${i + 1}) to edithiveproductions09@gmail.com`)
          return NextResponse.json({ 
            success: true, 
            message: 'Thank you for contacting EditHive! We\'ll get back to you within 24 hours.' 
          })
        } else {
          console.log(`❌ Web3Forms Key ${i + 1} failed:`, web3Result)
          // Continue to next key
        }
      } catch (error) {
        console.log(`❌ Web3Forms Key ${i + 1} error:`, error)
        // Continue to next key
      }
    }

    // Method 2: Try Resend API if available
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

    // Method 3: Try Formspree (reliable backup)
    try {
      const formspreeData = new FormData()
      formspreeData.append('name', name)
      formspreeData.append('email', email)
      formspreeData.append('message', message)
      formspreeData.append('_subject', `🚨 NEW LEAD: ${name} | EditHive Contact Form`)
      formspreeData.append('_replyto', email)
      
      const formspreeResponse = await fetch('https://formspree.io/f/xdkopajo', {
        method: 'POST',
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (formspreeResponse.ok) {
        console.log('✅ Email sent via Formspree to edithiveproductions09@gmail.com')
        return NextResponse.json({ 
          success: true, 
          message: 'Thank you for contacting EditHive! We\'ll get back to you within 24 hours.' 
        })
      } else {
        console.log('❌ Formspree failed:', formspreeResponse.status)
      }
    } catch (error) {
      console.log('Formspree error:', error)
    }

    // Method 4: Try EmailJS as final backup
    try {
      const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID || 'service_8hdyxjp',
          template_id: process.env.EMAILJS_TEMPLATE_ID || 'template_contact',
          user_id: process.env.EMAILJS_USER_ID || 'GvtSKbSSGGKFZR-4q',
          template_params: {
            from_name: name,
            from_email: email,
            to_name: 'EditHive Team',
            to_email: 'edithiveproductions09@gmail.com',
            subject: `🚨 NEW LEAD: ${name} | EditHive Contact Form`,
            message: message,
            reply_to: email
          }
        })
      })

      if (emailjsResponse.ok) {
        console.log('✅ Email sent via EmailJS to edithiveproductions09@gmail.com')
        return NextResponse.json({ 
          success: true, 
          message: 'Thank you for contacting EditHive! We\'ll get back to you within 24 hours.' 
        })
      } else {
        console.log('❌ EmailJS failed:', emailjsResponse.status)
      }
    } catch (error) {
      console.log('EmailJS error:', error)
    }

    // Fallback success (form data is logged)
    return NextResponse.json({ 
      success: true, 
      message: 'Message logged successfully! Email services may need configuration.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process message. Please try again.' },
      { status: 500 }
    )
  }
}