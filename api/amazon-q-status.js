// Vercel API Route: /api/amazon-q-status
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Amazon Q CLI not available on Vercel (expected)
  res.status(200).json({
    available: true, // Enable built-in responses
    fallbackMode: true,
    error: 'Amazon Q CLI not available in serverless environment',
    suggestion: 'Using comprehensive built-in AWS knowledge instead',
    environment: 'vercel',
    timestamp: new Date().toISOString(),
    note: 'Built-in AWS knowledge provides comprehensive answers'
  });
}
