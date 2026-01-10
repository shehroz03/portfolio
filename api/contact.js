const { Resend } = require('resend');

module.exports = async (req, res) => {
    // Healthy check
    if (req.method === 'GET') {
        return res.status(200).json({
            status: 'ok',
            message: 'API is detected and working!',
            key_configured: !!process.env.RESEND_API_KEY
        });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        if (!process.env.RESEND_API_KEY) {
            return res.status(500).json({ error: 'RESEND_API_KEY not found in Vercel' });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'shehrozshafiq03@gmail.com',
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px;">
                    <h3>New Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #f0f0f0; padding: 10px;">${message}</p>
                </div>
            `,
        });

        if (error) {
            return res.status(500).json({ error: 'Resend Error', details: error });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (err) {
        return res.status(500).json({ error: 'Crash', details: err.message });
    }
};
