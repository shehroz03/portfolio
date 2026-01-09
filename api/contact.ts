import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize Resend with the Environment Variable
// We use a safe check to ensure the function doesn't crash if the key is missing on cold start
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is missing');
  }
  return new Resend(apiKey);
};

// Simple in-memory rate limiting (Note: This is not persistent across serverless invocations)
// If Vercel spins up a new instance, the cache resets. This is a best-effort local fix.
const ipCache = new Map<string, { count: number; lastReset: number }>();

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // 1. Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const { name, email, message } = request.body;
    const ip = (request.headers['x-forwarded-for'] as string) || 'anonymous';

    // 2. Rate Limiting Logic (5 requests per hour)
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour
    const userStats = ipCache.get(ip) || { count: 0, lastReset: now };

    if (now - userStats.lastReset > windowMs) {
      userStats.count = 0;
      userStats.lastReset = now;
    }

    if (userStats.count >= 5) {
      return response.status(429).json({
        success: false,
        error: 'Too many requests. Please try again after an hour.'
      });
    }

    // Update rate limit stats
    userStats.count++;
    ipCache.set(ip, userStats);

    // 3. Validation
    if (!name || !email || !message) {
      return response.status(400).json({
        success: false,
        error: 'Name, email, and message are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    if (message.length < 10) {
      return response.status(400).json({
        success: false,
        error: 'Message must be at least 10 characters long.'
      });
    }

    // 4. Send Email via Resend
    let resend;
    try {
      resend = getResend();
    } catch (e: any) {
      console.error('Resend Initialization Error:', e.message);
      return response.status(500).json({
        success: false,
        error: 'Email service configuration error. Please check environment variables.'
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'shehrozshafiq03@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #6366F1; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <div style="margin-top: 20px;">
              <p style="margin: 0 0 5px 0;"><strong>Message:</strong></p>
              <div style="background: white; border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 20px; text-align: center;">
            Sent from your dark portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return response.status(500).json({
        success: false,
        error: 'Failed to send email. Please try again later.'
      });
    }

    // 5. Success Response
    return response.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      id: data?.id
    });

  } catch (error: any) {
    console.error('Contact API Unexpected Error:', error);
    return response.status(500).json({
      success: false,
      error: 'An unexpected error occurred during processing.'
    });
  }
}
