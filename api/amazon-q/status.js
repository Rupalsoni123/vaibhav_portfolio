// Vercel API Route: /api/amazon-q/status
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

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

  try {
    // Try to check Amazon Q CLI availability
    // Note: This likely won't work on Vercel due to serverless limitations
    const { stdout } = await execAsync('q --version', { timeout: 5000 });
    
    res.status(200).json({
      available: true,
      version: stdout.trim(),
      awsRegion: process.env.AWS_REGION || 'us-east-1',
      timestamp: new Date().toISOString(),
      environment: 'vercel'
    });
  } catch (error) {
    // Amazon Q CLI not available on Vercel (expected)
    res.status(200).json({
      available: false,
      error: 'Amazon Q CLI not available in serverless environment',
      suggestion: 'Amazon Q CLI requires a persistent environment. Using built-in AWS knowledge instead.',
      fallbackMode: true,
      environment: 'vercel',
      timestamp: new Date().toISOString()
    });
  }
}
