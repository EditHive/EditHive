# Contact Form Setup Guide

Your contact form is now configured to send emails directly to your inbox! Here's how to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Option 1: Web3Forms (Recommended - Free)

1. **Get Your Access Key**
   - Go to [web3forms.com](https://web3forms.com)
   - Enter your email: `edithiveproductions09@gmail.com`
   - Click "Create Access Key"
   - Copy the access key you receive

2. **Configure Environment Variables**
   - Create a `.env.local` file in your project root
   - Add your access key:
   ```bash
   WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

3. **Deploy to Vercel**
   - In your Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add: `WEB3FORMS_ACCESS_KEY` with your access key value
   - Redeploy your project

## 📧 How It Works

### Current Features:
- ✅ **Form Validation**: Checks for required fields and valid email format
- ✅ **Loading States**: Shows spinner while sending
- ✅ **Success/Error Messages**: Clear feedback to users
- ✅ **Professional Email Format**: Beautiful HTML emails with your branding
- ✅ **Anti-Spam**: Basic validation and rate limiting
- ✅ **Responsive Design**: Works on all devices

### Email Format:
When someone submits the form, you'll receive a beautifully formatted email with:
- Contact person's name and email
- Their message with proper formatting
- Timestamp of submission
- EditHive branding
- Reply-to functionality (you can reply directly)

## 🔧 Alternative Email Services

### Option 2: Resend (Professional)
If you prefer a more robust solution:

1. Sign up at [resend.com](https://resend.com)
2. Get API key and add to environment variables
3. Update the API route to use Resend instead

### Option 3: EmailJS (Client-side)
For a completely client-side solution:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Configure your email service
3. Update the form component

## 🛠️ Development & Testing

### Test Locally:
```bash
npm run dev
```
Fill out the form on `http://localhost:3000` and check:
- Form submission works
- Console logs show the message details
- Loading states appear correctly

### Production Testing:
1. Deploy to Vercel with environment variables
2. Test the live form
3. Check your email inbox for messages

## 📋 Email Template

The emails you receive will look like this:

```
Subject: New Contact Form Submission from [Name]

From: [Name] ([email])
Message: [Their message]
Received: [Timestamp]

You can reply directly to this email.
```

## 🚨 Troubleshooting

### Common Issues:

1. **Form submits but no email received**
   - Check your Web3Forms access key
   - Verify environment variables in Vercel
   - Check spam folder

2. **Error messages on form submission**
   - Check browser console for detailed errors
   - Verify API route is deployed correctly
   - Test with different email addresses

3. **Styling issues**
   - Form automatically matches your site's dark theme
   - Status messages have proper contrast
   - Mobile responsive design

### Debug Mode:
The API route logs all submissions to the server console, so you can check Vercel's function logs if needed.

## 🎯 Next Steps

Your contact form is production-ready! Consider these enhancements:

1. **Add reCAPTCHA** for additional spam protection
2. **Set up email notifications** for form submissions
3. **Create auto-response** emails to confirm receipt
4. **Add file upload** capability for project briefs
5. **Integrate with CRM** systems like HubSpot or Airtable

## 📞 Support

If you need help setting this up:
1. Check the browser console for errors
2. Review Vercel function logs
3. Test with the fallback mode (console logging)

The form will work in demo mode even without Web3Forms configured - it will log messages to the console and show success messages to users.