# Contact Form Notification Setup

## 📧 **Primary Notifications: Email**

Your notifications will be sent to: **`edithiveproductions09@gmail.com`**

### **Email Subject:** 
```
🚨 NEW LEAD: Contact Form - [Customer Name] | EditHive
```

### **What You'll Receive:**
- **Instant email** with customer details
- **Professional formatting** with EditHive branding
- **Reply-to functionality** (click reply to respond directly)
- **Timestamp** of submission
- **Full message content** with proper formatting

---

## 📱 **Enable Mobile Notifications:**

### **Option 1: Gmail Mobile App**
1. Download Gmail app on your phone
2. Go to Settings → [Your Account] → Notifications
3. Enable "High priority notifications" 
4. Turn on sound/vibration for new emails

### **Option 2: Apple Mail (iPhone)**
1. Settings → Mail → Accounts → Add Account
2. Add your Gmail account
3. Go to Settings → Notifications → Mail
4. Enable alerts, sounds, and badges

### **Option 3: Email Forwarding**
Forward contact form emails to multiple addresses:
1. Gmail Settings → Forwarding and POP/IMAP
2. Add forwarding address (like your personal phone email)
3. Set up a filter for "EditHive" emails

---

## 🔔 **Advanced Notification Options:**

### **SMS Notifications (Optional)**
If you want SMS alerts for urgent leads:

1. **Add this environment variable in Vercel:**
   ```
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE_FROM=+1234567890
   TWILIO_PHONE_TO=+1234567890  # Your phone number
   ```

2. **Text message will say:**
   ```
   🚨 NEW LEAD: [Name] submitted contact form on EditHive
   Email: [email] | Time: [timestamp]
   Check your email for full details.
   ```

### **Slack Notifications (Optional)**
Get notifications in your Slack workspace:

1. **Create Slack webhook:**
   - Go to your Slack workspace
   - Apps → Incoming Webhooks
   - Copy webhook URL

2. **Add to Vercel environment variables:**
   ```
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   ```

3. **Slack message will show:**
   ```
   🚨 NEW LEAD ALERT! 
   Name: [Customer Name]
   Email: [customer@email.com]
   Message: [Their message...]
   Time: [timestamp]
   ```

### **Discord Notifications (Optional)**
Get notifications in Discord:

1. **Create Discord webhook in your server**
2. **Add environment variable:**
   ```
   DISCORD_WEBHOOK_URL=your_discord_webhook_url
   ```

---

## ⚡ **Quick Mobile Setup (2 minutes):**

### **iPhone Users:**
1. Download **Gmail app** from App Store
2. Sign in with `edithiveproductions09@gmail.com`
3. Allow notifications when prompted
4. Done! You'll get instant push notifications

### **Android Users:**
1. Gmail app is usually pre-installed
2. Add your account if not already added  
3. Enable notifications in app settings
4. Done! Instant notifications enabled

---

## 🚨 **Important: Check These Locations**

### **First-Time Setup:**
1. **Check Spam Folder** - Mark as "Not Spam" if it goes there
2. **Check Promotions Tab** - Move to Primary if using Gmail tabs
3. **Whitelist sender** - Add Web3Forms sender to contacts

### **Email Preview:**
```
From: Web3Forms <no-reply@web3forms.com>
To: edithiveproductions09@gmail.com
Subject: 🚨 NEW LEAD: Contact Form - John Smith | EditHive

🚨 NEW LEAD ALERT! 🚨
EditHive Contact Form Submission

Contact Details:
Name: John Smith  
Email: john@example.com

Message:
Hi, I'm interested in your video editing services for my YouTube channel. 
I have about 10 videos per month that need editing. Can we discuss pricing?

Received: Monday, October 8, 2024 at 7:45 PM EST
```

---

## 📋 **Testing Your Notifications:**

### **Test Steps:**
1. Go to your live website
2. Fill out the contact form with your own details
3. Submit the form
4. Check your email within 1-2 minutes
5. If no email, check spam folder
6. Reply to test the reply-to functionality

### **Troubleshooting:**
- **No email received:** Check Web3Forms access key in Vercel
- **In spam folder:** Mark as not spam and add sender to contacts  
- **Delayed emails:** Web3Forms usually delivers within 30 seconds
- **Wrong formatting:** Check Vercel function logs for errors

---

## 🎯 **Pro Tips:**

1. **Create Gmail Label:** Filter emails with "EditHive" to auto-label them
2. **Priority Inbox:** Mark contact form emails as important
3. **Desktop Notifications:** Enable Gmail desktop notifications
4. **Multiple Devices:** Install Gmail app on all your devices
5. **Backup Email:** Forward important leads to a second email address

Your contact form is now set up to ensure you **never miss a lead**! 🚀