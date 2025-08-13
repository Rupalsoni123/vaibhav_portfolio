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
    available: true, // Enable the chatbot functionality
    fallbackMode: true,
    cliAvailable: false,
    error: 'Amazon Q CLI not available in serverless environment',
    suggestion: 'Chatbot will provide setup guidance and instructions',
    environment: 'vercel',
    timestamp: new Date().toISOString(),
    note: 'For real Amazon Q CLI responses, run this portfolio locally with Amazon Q CLI installed',
    setupInstructions: {
      local: [
        'Clone this portfolio locally',
        'Install Amazon Q CLI: npm install -g @aws/amazon-q-cli',
        'Configure AWS: aws configure',
        'Setup Amazon Q: q configure',
        'Run locally: npm run dev'
      ],
      direct: [
        'Use Amazon Q in AWS Console',
        'Use Amazon Q in your IDE with AWS Toolkit',
        'Use q chat command directly in terminal'
      ]
    }
  });
}
