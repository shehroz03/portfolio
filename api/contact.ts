import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (Note: This is not persistent across serverless invocations)
// For robust rate limiting on Vercel, Upstash Redis is recommended.
const ipCache = new Map<string, { count: number; lastReset: number }>();

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = request.body;
    const ip = (request.headers['x-forwarded-for'] as string) || 'anonymous';

    // Rate Limiting Logic (5 requests per hour)
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour
    const userStats = ipCache.get(ip) || { count: 0, lastReset: now };

    if (now - userStats.lastReset > windowMs) {
      userStats.count = 0;
      userStats.lastReset = now;
    }

    if (userStats.count >= 5) {
      return response.status(429).json({ 
        error: 'Too many requests. Please try again after an hour.' 
      });
    }

    // Update rate limit stats
    userStats.count++;
    ipCache.set(ip, userStats);

    // Validation
    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (message.length < 10) {
      return response.status(400).json({ error: 'Message must be at least 10 characters long.' });
    }

    // Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'shehrozshafiq03@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366F1;">New Contact Form Submission</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return response.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }

    return response.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!',
      id: data?.id 
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return response.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
