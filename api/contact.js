const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    // Support GET for status check
    if (req.method === 'GET') {
        return res.status(200).json({ status: 'ok', message: 'API is alive (JS)' });
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'shehrozshafiq03@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (err) {
        console.error('Runtime Error:', err.message);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};
