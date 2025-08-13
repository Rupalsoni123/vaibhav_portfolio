// Vercel API Route: /api/amazon-q-query
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

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const startTime = Date.now();
  const { question, context = '', userId = 'anonymous' } = req.body;

  // SECURITY: Input validation and command restrictions
  if (!question || question.trim().length === 0) {
    res.status(400).json({
      error: 'Question is required',
      message: 'Please provide a valid question'
    });
    return;
  }

  // SECURITY: Sanitize input and block dangerous commands
  const sanitizedQuestion = question.replace(/[;&|`$(){}[\]]/g, '').trim();
  
  // SECURITY: Block dangerous patterns
  const blockedPatterns = [
    /mcp[_-]?server/i, /mcp.*invoke/i, /mcp.*tool/i, /mcp.*protocol/i,
    /aws\s+.*create/i, /aws\s+.*delete/i, /aws\s+.*modify/i, /aws\s+.*update/i,
    /aws\s+.*put/i, /aws\s+.*deploy/i, /aws\s+.*launch/i, /aws\s+.*terminate/i,
    /terraform\s+apply/i, /terraform\s+destroy/i, /cdk\s+deploy/i, /cdk\s+destroy/i,
    /kubectl\s+create/i, /kubectl\s+apply/i, /kubectl\s+delete/i, /kubectl\s+deploy/i,
    /docker\s+run/i, /docker\s+deploy/i, /docker\s+create/i,
    /\$\(/, /`.*`/, /\|\s*sh/i, /\|\s*bash/i, /\|\s*exec/i,
    /sudo/i, /chmod/i, /chown/i, /rm\s+-rf/i, /curl.*\|/i, /wget.*\|/i, /nc\s+/i, /netcat/i
  ];
  
  const isBlocked = blockedPatterns.some(pattern => pattern.test(sanitizedQuestion));
  
  if (isBlocked) {
    res.status(403).json({
      error: 'Security Restriction',
      message: 'This request contains potentially dangerous commands that are not allowed.',
      details: 'The chatbot is restricted from executing commands that could create, modify, or delete cloud services.',
      allowedQueries: [
        'General AWS questions and explanations',
        'Best practices and architecture guidance',
        'Troubleshooting and learning resources'
      ]
    });
    return;
  }
  
  if (sanitizedQuestion.length > 500) {
    res.status(400).json({
      error: 'Question too long',
      message: 'Please keep questions under 500 characters'
    });
    return;
  }

  try {
    const response = {
      success: true,
      response: generateIntelligentAWSResponse(sanitizedQuestion),
      source: 'Built-in AWS Knowledge (Vercel)',
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - startTime,
      metadata: {
        questionLength: sanitizedQuestion.length,
        category: categorizeQuestion(sanitizedQuestion),
        fallback: true,
        environment: 'vercel'
      }
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to generate response'
    });
  }
}

// Helper functions
function generateIntelligentAWSResponse(question) {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion === 'aws' || lowerQuestion === 'what is aws') {
    return `**Amazon Web Services (AWS)** is the world's most comprehensive cloud platform.

**🔧 Core Services:**
• **Compute:** EC2, Lambda, ECS, EKS, Fargate
• **Storage:** S3, EBS, EFS, Glacier
• **Database:** RDS, DynamoDB, ElastiCache, Redshift
• **Networking:** VPC, CloudFront, Route 53, Load Balancers
• **Security:** IAM, KMS, WAF, Shield, Secrets Manager

**💡 Key Benefits:**
• **Scalability:** Scale resources up or down instantly
• **Cost-Effective:** Pay only for what you use
• **Reliability:** 99.99% uptime SLA with global infrastructure
• **Security:** Enterprise-grade security and compliance
• **Innovation:** 200+ services with continuous updates

**🚀 Popular Use Cases:**
• Web applications and mobile backends
• Data backup and disaster recovery
• Big data analytics and machine learning
• Content delivery and media streaming
• Enterprise application migration

**📈 Getting Started:**
1. Create AWS Free Tier account
2. Learn core services (EC2, S3, RDS)
3. Follow AWS Well-Architected Framework
4. Implement security best practices
5. Use Infrastructure as Code (CloudFormation/CDK)

Would you like me to explain any specific AWS service or concept in detail?`;
  }
  
  if (lowerQuestion.includes('ec2')) {
    return `**Amazon EC2 (Elastic Compute Cloud)** provides scalable virtual servers.

**🖥️ Key Features:**
• **Instance Types:** Optimized for compute, memory, storage, or GPU workloads
• **Auto Scaling:** Automatically adjust capacity based on demand
• **Load Balancing:** Distribute traffic across multiple instances
• **Security Groups:** Virtual firewalls for network access control

**📊 Instance Categories:**
• **General Purpose:** t3, m5, m6i - Balanced compute, memory, networking
• **Compute Optimized:** c5, c6i - High-performance processors
• **Memory Optimized:** r5, r6i, x1e - Fast performance for memory-intensive workloads
• **Storage Optimized:** i3, d2 - High sequential read/write access to large datasets

**💰 Pricing Models:**
• **On-Demand:** Pay by hour/second with no commitments
• **Reserved Instances:** 1-3 year terms for up to 75% savings
• **Spot Instances:** Bid on spare capacity for up to 90% savings
• **Dedicated Hosts:** Physical servers for compliance requirements

**🛡️ Best Practices:**
• Use Auto Scaling Groups for high availability
• Implement proper security groups (least privilege)
• Regular backups with EBS snapshots
• Monitor performance with CloudWatch
• Use placement groups for network performance
• Tag resources for cost management

What specific aspect of EC2 would you like to explore further?`;
  }
  
  if (lowerQuestion.includes('s3')) {
    return `**Amazon S3 (Simple Storage Service)** is object storage for the internet.

**🗄️ Key Features:**
• **Unlimited Storage:** Store virtually unlimited amounts of data
• **11 9's Durability:** 99.999999999% durability guarantee
• **Global Accessibility:** Access from anywhere via REST API
• **Versioning:** Keep multiple versions of objects

**📦 Storage Classes:**
• **Standard:** Frequently accessed data (millisecond access)
• **Standard-IA:** Infrequently accessed (lower cost, retrieval fee)
• **One Zone-IA:** Single AZ storage for non-critical data
• **Glacier Instant Retrieval:** Archive with millisecond access
• **Glacier Flexible Retrieval:** 1-12 hours retrieval time
• **Glacier Deep Archive:** Lowest cost, 12+ hours retrieval

**🔒 Security Features:**
• **Encryption:** Server-side and client-side encryption
• **Access Control:** IAM policies, bucket policies, ACLs
• **Versioning:** Protect against accidental deletion
• **MFA Delete:** Require multi-factor authentication
• **Access Logging:** Track requests for security auditing

**💡 Common Use Cases:**
• Static website hosting
• Data backup and archival
• Content distribution (with CloudFront)
• Data lakes for analytics
• Application data storage
• Disaster recovery

**🎯 Best Practices:**
• Enable versioning for critical data
• Use lifecycle policies to optimize costs
• Implement least privilege access
• Enable CloudTrail for API logging
• Use S3 Transfer Acceleration for global uploads
• Monitor costs with S3 Storage Lens

What specific S3 feature would you like me to explain?`;
  }
  
  return `**AWS Question Detected!** I can help you understand AWS services and concepts.

**🔧 What I Can Explain:**
• **Core Services:** EC2, S3, Lambda, RDS, VPC, IAM
• **Architecture:** Design patterns, best practices, cost optimization
• **Security:** IAM, encryption, compliance, monitoring
• **DevOps:** CI/CD, Infrastructure as Code, containerization
• **Databases:** RDS, DynamoDB, ElastiCache, data strategies
• **Networking:** VPC, CloudFront, Route 53, load balancing

**💡 Popular Topics:**
• "How does AWS Lambda work?"
• "S3 storage classes and pricing"
• "VPC networking best practices"
• "RDS vs DynamoDB comparison"
• "IAM security best practices"
• "Cost optimization strategies"

What specific AWS topic would you like me to explain in detail?`;
}

function categorizeQuestion(question) {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes('ec2') || lowerQuestion.includes('instance')) return 'compute';
  if (lowerQuestion.includes('s3') || lowerQuestion.includes('bucket')) return 'storage';
  if (lowerQuestion.includes('lambda') || lowerQuestion.includes('function')) return 'serverless';
  if (lowerQuestion.includes('rds') || lowerQuestion.includes('database')) return 'database';
  if (lowerQuestion.includes('vpc') || lowerQuestion.includes('network')) return 'networking';
  if (lowerQuestion.includes('iam') || lowerQuestion.includes('security')) return 'security';
  return 'general';
}
