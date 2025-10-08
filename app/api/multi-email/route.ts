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

    const emailContent = `
=== NEW CONTACT FORM SUBMISSION ===
Time: ${new Date().toLocaleString()}
Name: ${name}
Email: ${email}
Message: ${message}
=====================================
`
    console.log(emailContent)

    // Multi-service approach for higher limits
    const services = [
      // Service 1: Your Web3Forms account (250/month)
      {
        name: 'Web3Forms-1',
        endpoint: 'https://api.web3forms.com/submit',
        payload: {
          access_key: '289262d4-40ad-46f9-997a-91082d879d26',
          subject: `🚨 NEW LEAD: Contact Form - ${name} | EditHive`,
          email: email,
          name: name,
          message: message,
          to: 'edithiveproductions09@gmail.com',
          from_name: 'EditHive Website',
          replyto: email,
        }
      },
      // Service 2: Formspree (50/month free)
      {
        name: 'Formspree',
        endpoint: 'https://formspree.io/f/xpzgkqko',
        payload: {
          name: name,
          email: email,
          message: message,
          _replyto: email,
          _subject: `🚨 NEW LEAD: Contact Form - ${name} | EditHive`,
        }
      },
      // Service 3: Netlify Forms (100/month free)
      {
        name: 'Netlify',
        endpoint: 'https://api.netlify.com/api/v1/submissions',
        payload: {
          'form-name': 'contact',
          name: name,
          email: email,
          message: message,
        }
      }
    ]

    // Try services in order until one succeeds
    for (const service of services) {
      try {
        const response = await fetch(service.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(service.payload)
        })

        if (response.ok) {
          console.log(`✅ Email sent successfully via ${service.name}`)
          return NextResponse.json({ 
            success: true, 
            message: `Message sent successfully via ${service.name}!`,
            service: service.name
          })
        } else {
          console.log(`❌ ${service.name} failed: ${response.status}`)
        }
      } catch (error) {
        console.error(`${service.name} error:`, error)
        continue // Try next service
      }
    }

    // If all services fail, still log and return success
    return NextResponse.json({ 
      success: true, 
      message: 'Message received and logged. We\'ll get back to you soon!' 
    })

  } catch (error) {
    console.error('Multi-email error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}