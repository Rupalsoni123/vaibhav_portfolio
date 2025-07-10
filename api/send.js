import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  const msg = {
    to: 'vaibhavnee2021@gmail.com',
    from: 'vaibhavsoni5567@gmail.com',
    subject: `New Contact Form Message from ${name}`,
    text: `From: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error.message);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
