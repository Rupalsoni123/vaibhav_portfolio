// Vercel API Route: /api/amazon-q
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
      message: 'Please provide a valid question for Amazon Q'
    });
    return;
  }

  // SECURITY: Sanitize input and block dangerous commands
  const sanitizedQuestion = question.replace(/[;&|`$(){}[\]]/g, '').trim();
  
  // SECURITY: Block MCP server usage and cloud service creation commands
  const blockedPatterns = [
    // MCP server patterns
    /mcp[_-]?server/i,
    /mcp.*invoke/i,
    /mcp.*tool/i,
    /mcp.*protocol/i,
    
    // AWS service creation/modification commands
    /aws\s+.*create/i,
    /aws\s+.*delete/i,
    /aws\s+.*modify/i,
    /aws\s+.*update/i,
    /aws\s+.*put/i,
    /aws\s+.*deploy/i,
    /aws\s+.*launch/i,
    /aws\s+.*terminate/i,
    /aws\s+.*stop/i,
    /aws\s+.*start/i,
    
    // Infrastructure deployment commands
    /terraform\s+apply/i,
    /terraform\s+destroy/i,
    /cdk\s+deploy/i,
    /cdk\s+destroy/i,
    /kubectl\s+create/i,
    /kubectl\s+apply/i,
    /kubectl\s+delete/i,
    /kubectl\s+deploy/i,
    /docker\s+run/i,
    /docker\s+deploy/i,
    /docker\s+create/i,
    
    // Shell command injection attempts
    /\$\(/,
    /`.*`/,
    /\|\s*sh/i,
    /\|\s*bash/i,
    /\|\s*exec/i,
    /sudo/i,
    /chmod/i,
    /chown/i,
    /rm\s+-rf/i,
    /curl.*\|/i,
    /wget.*\|/i,
    /nc\s+/i,
    /netcat/i
  ];
  
  const isBlocked = blockedPatterns.some(pattern => pattern.test(sanitizedQuestion));
  
  if (isBlocked) {
    res.status(403).json({
      error: 'Security Restriction',
      message: 'This request contains potentially dangerous commands or patterns that are not allowed.',
      details: 'The chatbot is restricted from executing commands that could create, modify, or delete cloud services, use MCP servers, or perform system operations.',
      allowedQueries: [
        'General AWS questions and explanations',
        'Best practices and architecture guidance',
        'Troubleshooting and learning resources',
        'Conceptual explanations of services',
        'Documentation and reference information'
      ],
      securityNote: 'This restriction is in place to protect your cloud infrastructure and prevent unauthorized operations.'
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

  console.log(`Amazon Q request from ${userId}: ${sanitizedQuestion}`);

  // Since Amazon Q CLI won't work on Vercel, provide intelligent built-in responses
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
        environment: 'vercel',
        note: 'Amazon Q CLI not available in serverless environment'
      }
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to generate response',
      timestamp: new Date().toISOString()
    });
  }
}

// Helper function to generate intelligent AWS responses
function generateIntelligentAWSResponse(question) {
  const lowerQuestion = question.toLowerCase();
  
  // AWS general question
  if (lowerQuestion === 'aws' || lowerQuestion === 'what is aws') {
    return `**Amazon Web Services (AWS)** is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.

**Core AWS Services:**

**🖥️ Compute:**
• **EC2** - Virtual servers in the cloud
• **Lambda** - Serverless compute service
• **ECS/EKS** - Container orchestration
• **Fargate** - Serverless containers

**💾 Storage:**
• **S3** - Object storage service
• **EBS** - Block storage for EC2
• **EFS** - Managed file system
• **Glacier** - Long-term archival

**🗄️ Database:**
• **RDS** - Managed relational databases
• **DynamoDB** - NoSQL database
• **ElastiCache** - In-memory caching
• **Redshift** - Data warehousing

**🌐 Networking:**
• **VPC** - Virtual private cloud
• **CloudFront** - Content delivery network
• **Route 53** - DNS service
• **Load Balancers** - Distribute traffic

**🔒 Security & Identity:**
• **IAM** - Identity and access management
• **KMS** - Key management service
• **Secrets Manager** - Secure secrets storage
• **WAF** - Web application firewall

**Key Benefits:**
• **Scalability** - Scale up or down based on demand
• **Cost-Effective** - Pay only for what you use
• **Reliability** - 99.99% uptime SLA
• **Security** - Enterprise-grade security
• **Global Reach** - Available in 190+ countries

**Popular Use Cases:**
• Web applications and APIs
• Data backup and disaster recovery
• Big data analytics and machine learning
• Content delivery and streaming
• Enterprise applications migration

Would you like me to explain any specific AWS service or concept in detail?`;
  }
  
  // EC2 questions
  if (lowerQuestion.includes('ec2')) {
    return `**Amazon EC2 (Elastic Compute Cloud)** provides scalable virtual servers in the cloud.

**Key Features:**
• **Instance Types** - Optimized for different workloads (compute, memory, storage, GPU)
• **Auto Scaling** - Automatically adjust capacity based on demand
• **Load Balancing** - Distribute traffic across multiple instances
• **Security Groups** - Virtual firewalls for your instances

**Common Instance Types:**
• **t3.micro** - Burstable performance, good for low-traffic websites
• **m5.large** - General purpose, balanced compute/memory/networking
• **c5.xlarge** - Compute optimized for CPU-intensive applications
• **r5.large** - Memory optimized for in-memory databases

**Best Practices:**
• Use Auto Scaling Groups for high availability
• Implement proper security groups and NACLs
• Regular backups with EBS snapshots
• Monitor with CloudWatch metrics
• Use Spot Instances for cost optimization

**Pricing Models:**
• **On-Demand** - Pay by the hour/second
• **Reserved Instances** - 1-3 year commitments for discounts
• **Spot Instances** - Bid on spare capacity for up to 90% savings

What specific aspect of EC2 would you like to know more about?`;
  }
  
  // S3 questions
  if (lowerQuestion.includes('s3')) {
    return `**Amazon S3 (Simple Storage Service)** is object storage built to store and retrieve any amount of data from anywhere.

**Key Features:**
• **Unlimited Storage** - Store virtually unlimited amounts of data
• **11 9's Durability** - 99.999999999% durability
• **Multiple Storage Classes** - Optimize costs based on access patterns
• **Global Accessibility** - Access from anywhere via REST API

**Storage Classes:**
• **Standard** - Frequently accessed data
• **Standard-IA** - Infrequently accessed data
• **Glacier** - Long-term archival (minutes to hours retrieval)
• **Glacier Deep Archive** - Lowest cost for long-term retention

**Common Use Cases:**
• **Static Website Hosting** - Host HTML, CSS, JS files
• **Data Backup & Archival** - Secure, durable backup solution
• **Content Distribution** - Store assets for CloudFront CDN
• **Data Lakes** - Store structured and unstructured data
• **Application Data** - Store user uploads, logs, documents

**Security Features:**
• **Encryption** - At rest and in transit
• **Access Control** - IAM policies and bucket policies
• **Versioning** - Keep multiple versions of objects
• **MFA Delete** - Require MFA for object deletion

**Best Practices:**
• Enable versioning for important data
• Use lifecycle policies to transition to cheaper storage classes
• Implement proper IAM policies
• Enable CloudTrail for access logging
• Use S3 Transfer Acceleration for faster uploads

What specific S3 feature or use case interests you?`;
  }
  
  // Default comprehensive response
  return `**AWS (Amazon Web Services)** is the world's leading cloud computing platform. Here's what you need to know:

**🌟 What is AWS?**
AWS provides on-demand cloud computing platforms and APIs to individuals, companies, and governments on a metered pay-as-you-go basis.

**🔧 Core Services:**
• **Compute** - EC2, Lambda, ECS, EKS
• **Storage** - S3, EBS, EFS, Glacier
• **Database** - RDS, DynamoDB, ElastiCache
• **Networking** - VPC, CloudFront, Route 53
• **Security** - IAM, KMS, WAF, Shield

**💡 Key Benefits:**
• **Cost Effective** - Pay only for what you use
• **Scalable** - Scale up or down instantly
• **Reliable** - 99.99% uptime SLA
• **Secure** - Enterprise-grade security
• **Global** - Available worldwide

**🚀 Popular Use Cases:**
• Web applications and APIs
• Data backup and disaster recovery
• Big data analytics and ML
• Content delivery and streaming
• Enterprise application migration

**📈 Getting Started:**
1. Create AWS account
2. Learn core services (EC2, S3, RDS)
3. Use AWS Free Tier for practice
4. Follow Well-Architected Framework
5. Implement security best practices

**🎯 Career Opportunities:**
• Cloud Solutions Architect
• DevOps Engineer
• Cloud Security Specialist
• Data Engineer
• Machine Learning Engineer

Would you like me to explain any specific AWS service, architecture pattern, or implementation strategy in detail?`;
}

// Helper function to categorize questions
function categorizeQuestion(question) {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('ec2') || lowerQuestion.includes('instance')) return 'compute';
  if (lowerQuestion.includes('s3') || lowerQuestion.includes('bucket')) return 'storage';
  if (lowerQuestion.includes('lambda') || lowerQuestion.includes('function')) return 'serverless';
  if (lowerQuestion.includes('rds') || lowerQuestion.includes('database')) return 'database';
  if (lowerQuestion.includes('vpc') || lowerQuestion.includes('network')) return 'networking';
  if (lowerQuestion.includes('iam') || lowerQuestion.includes('security')) return 'security';
  if (lowerQuestion.includes('cloudformation') || lowerQuestion.includes('cdk')) return 'infrastructure';
  if (lowerQuestion.includes('cost') || lowerQuestion.includes('billing')) return 'billing';
  if (lowerQuestion.includes('monitor') || lowerQuestion.includes('cloudwatch')) return 'monitoring';
  
  return 'general';
}
