# EmailJS Setup for Contact Form

This document provides instructions on how to set up EmailJS for the contact form in your portfolio website. **Note: The EmailJS integration has been configured with the provided credentials.**

## Steps to Configure EmailJS

1. **Create an EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
   - The free tier allows 200 emails per month

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account
   - Note the Service ID for later use

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{reply_to}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient email (will be set to info.pauljoydeep@gmail.com)
   - Save the template and note the Template ID

4. **Configuration File Status**
   - The `src/lib/emailjs-config.ts` file has been updated with the provided EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  publicKey: "IruadLPER2RuZIx5W", // Public key from EmailJS dashboard
  serviceId: "service_phy0e9h", // Service ID from EmailJS
  templateId: "template_6biqgks", // Template ID from EmailJS
  toEmail: "info.pauljoydeep@gmail.com" // The recipient email address
};
```

   - The contact form is now configured to send emails directly through EmailJS without requiring the fallback to mailto links.

## Testing the Contact Form

1. After configuring EmailJS, run your development server:
   ```
   npm run dev
   ```

2. Navigate to your contact form

3. Fill out the form and submit it

4. Check your email to verify that you received the message

## Troubleshooting

If you encounter issues with the contact form:

1. Check the browser console for any errors
2. Verify that your EmailJS credentials are correct
3. Make sure your email service is properly connected in EmailJS
4. Check that your email template contains the correct variables

## Security Note

The public key is exposed in the client-side code, but EmailJS has built-in security measures to prevent abuse. For additional security, you can set up domain restrictions in your EmailJS dashboard.