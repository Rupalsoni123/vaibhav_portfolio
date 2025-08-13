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
    return `Amazon Web Services (AWS) is a comprehensive cloud computing platform that provides a wide range of services including computing power, storage, databases, networking, analytics, machine learning, and more.

**Core AWS Services:**

**Compute Services:**
• **Amazon EC2** - Scalable virtual servers in the cloud
• **AWS Lambda** - Serverless computing for running code without managing servers
• **Amazon ECS/EKS** - Container orchestration services
• **AWS Fargate** - Serverless compute for containers

**Storage Services:**
• **Amazon S3** - Object storage with industry-leading scalability and durability
• **Amazon EBS** - High-performance block storage for EC2
• **Amazon EFS** - Fully managed file system for EC2

**Database Services:**
• **Amazon RDS** - Managed relational database service
• **Amazon DynamoDB** - Fast and flexible NoSQL database
• **Amazon Redshift** - Fast, simple, cost-effective data warehousing

**Networking & Content Delivery:**
• **Amazon VPC** - Isolated cloud resources in a virtual network
• **Amazon CloudFront** - Global content delivery network
• **Elastic Load Balancing** - Distribute incoming traffic across multiple targets

**Key Benefits:**
• **Scalability** - Scale resources up or down based on demand
• **Cost-effectiveness** - Pay only for what you use with no upfront costs
• **Reliability** - Built on proven infrastructure with high availability
• **Security** - Comprehensive security capabilities and compliance certifications
• **Global reach** - Available in multiple regions worldwide

AWS enables organizations to build and deploy applications faster, reduce costs, and improve operational efficiency. Would you like me to explain any specific AWS service or concept in more detail?`;
  }
  
  if (lowerQuestion.includes('ec2')) {
    return `Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud, allowing you to launch virtual servers called instances.

**Key Features:**
• **Instance Types** - Various configurations optimized for different use cases
• **Auto Scaling** - Automatically adjust capacity to maintain performance
• **Elastic Load Balancing** - Distribute incoming traffic across multiple instances
• **Security Groups** - Virtual firewalls to control inbound and outbound traffic
• **Elastic IP Addresses** - Static IP addresses for dynamic cloud computing

**Instance Categories:**
• **General Purpose (t3, m5, m6i)** - Balanced compute, memory, and networking resources
• **Compute Optimized (c5, c6i)** - High-performance processors for compute-intensive tasks
• **Memory Optimized (r5, r6i, x1e)** - Fast performance for memory-intensive applications
• **Storage Optimized (i3, d2)** - High sequential read/write access to large datasets
• **Accelerated Computing (p3, g4)** - Hardware accelerators for machine learning and HPC

**Pricing Models:**
• **On-Demand Instances** - Pay by the hour or second with no long-term commitments
• **Reserved Instances** - Significant discounts for 1 or 3-year terms
• **Spot Instances** - Bid for unused EC2 capacity at reduced costs
• **Dedicated Hosts** - Physical servers dedicated for your use

**Best Practices:**
• Use Auto Scaling Groups for high availability and fault tolerance
• Implement proper security group rules following the principle of least privilege
• Regular backups using EBS snapshots and AMIs
• Monitor performance and costs using CloudWatch
• Use placement groups for applications requiring low latency
• Tag resources for better organization and cost tracking

**Common Use Cases:**
• Web applications and APIs
• Batch processing and high-performance computing
• Machine learning training and inference
• Development and testing environments
• Disaster recovery and backup solutions

What specific aspect of EC2 would you like to explore further?`;
  }
  
  if (lowerQuestion.includes('s3')) {
    return `Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

**Key Features:**
• **Virtually unlimited storage** - Store and retrieve any amount of data from anywhere
• **99.999999999% (11 9's) durability** - Designed to sustain the loss of data in two facilities
• **Multiple storage classes** - Optimize costs based on access patterns and retrieval requirements
• **Strong consistency** - Read-after-write consistency for all operations
• **Versioning** - Keep multiple versions of objects for data protection

**Storage Classes:**
• **S3 Standard** - For frequently accessed data with low latency and high throughput
• **S3 Standard-IA** - For infrequently accessed data with rapid access when needed
• **S3 One Zone-IA** - For infrequently accessed data that doesn't require multiple AZ resilience
• **S3 Glacier Instant Retrieval** - For archive data that needs immediate access
• **S3 Glacier Flexible Retrieval** - For archive data with retrieval times from minutes to hours
• **S3 Glacier Deep Archive** - Lowest cost storage for long-term retention and digital preservation

**Security and Access Control:**
• **Encryption** - Server-side and client-side encryption options
• **Access control** - Fine-grained access policies using IAM, bucket policies, and ACLs
• **MFA Delete** - Additional protection requiring multi-factor authentication for object deletion
• **Access logging** - Detailed records of requests made to your bucket
• **Cross-Region Replication** - Automatic replication of objects across AWS regions

**Common Use Cases:**
• **Backup and restore** - Reliable and cost-effective data backup solution
• **Data archiving** - Long-term retention with various retrieval options
• **Static website hosting** - Host static websites directly from S3
• **Content distribution** - Store and distribute content globally with CloudFront
• **Data lakes and analytics** - Store structured and unstructured data for big data analytics
• **Application data storage** - Store user-generated content, logs, and application assets

**Best Practices:**
• Enable versioning for critical data protection
• Use lifecycle policies to automatically transition objects to cheaper storage classes
• Implement least privilege access using IAM policies
• Enable CloudTrail for API call logging and monitoring
• Use S3 Transfer Acceleration for faster uploads from distant locations
• Monitor costs and usage with S3 Storage Lens

Would you like me to explain any specific S3 feature, storage class, or use case in more detail?`;
  }

  if (lowerQuestion.includes('lambda')) {
    return `AWS Lambda is a serverless compute service that runs your code in response to events without requiring you to provision or manage servers.

**Key Features:**
• **Serverless** - No servers to manage, AWS handles all infrastructure
• **Event-driven** - Automatically triggers in response to events from other AWS services
• **Automatic scaling** - Scales from zero to thousands of concurrent executions
• **Pay-per-use** - Only pay for compute time consumed, no charges when code isn't running
• **Built-in fault tolerance** - Maintains compute capacity across multiple Availability Zones

**Supported Runtimes:**
• **Node.js** - JavaScript runtime for web applications and APIs
• **Python** - Popular for data processing, machine learning, and automation
• **Java** - Enterprise applications and microservices
• **C# (.NET)** - Windows-based applications and services
• **Go** - High-performance applications with fast startup times
• **Ruby** - Web applications and scripting
• **Custom runtimes** - Support for any programming language using custom runtime API

**Common Event Sources:**
• **Amazon S3** - Object uploads, deletions, or modifications
• **Amazon DynamoDB** - Database record changes
• **Amazon API Gateway** - HTTP requests and REST API calls
• **Amazon CloudWatch Events** - Scheduled events and system events
• **Amazon SQS** - Message queue processing
• **Amazon SNS** - Push notifications and pub/sub messaging

**Use Cases:**
• **Real-time file processing** - Process files immediately after upload to S3
• **Data transformation** - ETL operations and data format conversions
• **Web backends** - Serverless APIs and microservices
• **IoT backends** - Process data from connected devices
• **Chatbots and voice assistants** - Handle conversational interfaces
• **Scheduled tasks** - Automated maintenance and batch processing

**Best Practices:**
• Keep functions small and focused on a single responsibility
• Use environment variables for configuration
• Implement proper error handling and retry logic
• Monitor performance with CloudWatch Logs and X-Ray
• Optimize cold start times by minimizing package size
• Use layers for shared dependencies and code reuse

**Limitations to Consider:**
• 15-minute maximum execution time
• 10 GB memory limit
• 512 MB temporary disk space (/tmp)
• 6 MB request/response payload limit for synchronous invocations

Would you like me to explain any specific aspect of Lambda, such as pricing, deployment, or integration patterns?`;
  }

  if (lowerQuestion.includes('rds')) {
    return `Amazon RDS (Relational Database Service) is a managed database service that makes it easy to set up, operate, and scale relational databases in the cloud.

**Supported Database Engines:**
• **Amazon Aurora** - MySQL and PostgreSQL-compatible with up to 5x better performance
• **MySQL** - Popular open-source relational database
• **PostgreSQL** - Advanced open-source relational database
• **MariaDB** - Community-developed fork of MySQL
• **Oracle Database** - Enterprise-grade commercial database
• **Microsoft SQL Server** - Microsoft's relational database management system

**Key Features:**
• **Automated backups** - Point-in-time recovery with configurable retention period
• **Multi-AZ deployments** - High availability with automatic failover
• **Read replicas** - Scale read workloads and improve performance
• **Automated patching** - Keep your database engine up to date
• **Monitoring and metrics** - Built-in CloudWatch integration
• **Security** - Encryption at rest and in transit, VPC isolation

**Instance Classes:**
• **General Purpose (db.t3, db.m5)** - Balanced compute, memory, and networking
• **Memory Optimized (db.r5, db.x1e)** - For memory-intensive applications
• **Burstable Performance (db.t3)** - Cost-effective for variable workloads

**Storage Types:**
• **General Purpose SSD (gp2/gp3)** - Balanced price and performance
• **Provisioned IOPS SSD (io1/io2)** - High-performance for I/O-intensive workloads
• **Magnetic storage** - Previous generation, cost-effective for light workloads

**High Availability Options:**
• **Multi-AZ deployments** - Synchronous replication to standby instance in different AZ
• **Read replicas** - Asynchronous replication for read scaling (up to 15 replicas)
• **Cross-region read replicas** - Disaster recovery and global read scaling

**Security Features:**
• **VPC isolation** - Launch RDS instances in your own virtual network
• **Encryption** - Encrypt data at rest using AWS KMS
• **SSL/TLS** - Encrypt data in transit
• **IAM integration** - Control access using AWS Identity and Access Management
• **Database activity streams** - Real-time monitoring of database activity

**Best Practices:**
• Use Multi-AZ for production workloads requiring high availability
• Implement read replicas to offload read traffic from primary database
• Enable automated backups and test restore procedures regularly
• Use parameter groups to optimize database configuration
• Monitor performance using CloudWatch and Performance Insights
• Apply security patches during maintenance windows

**Common Use Cases:**
• Web and mobile applications
• E-commerce platforms
• Online gaming
• Financial applications
• Content management systems

Would you like me to explain any specific RDS feature, such as Aurora, backup strategies, or performance optimization?`;
  }
  
  return `I can help you with AWS-related questions and provide detailed explanations about various AWS services and concepts.

**Popular AWS Services I can explain:**

**Compute:**
• **Amazon EC2** - Virtual servers in the cloud
• **AWS Lambda** - Serverless computing
• **Amazon ECS/EKS** - Container services
• **AWS Batch** - Batch computing

**Storage:**
• **Amazon S3** - Object storage
• **Amazon EBS** - Block storage
• **Amazon EFS** - File storage
• **AWS Storage Gateway** - Hybrid cloud storage

**Database:**
• **Amazon RDS** - Managed relational databases
• **Amazon DynamoDB** - NoSQL database
• **Amazon ElastiCache** - In-memory caching
• **Amazon Redshift** - Data warehousing

**Networking:**
• **Amazon VPC** - Virtual private cloud
• **Amazon CloudFront** - Content delivery network
• **AWS Direct Connect** - Dedicated network connection
• **Elastic Load Balancing** - Load distribution

**I can help with:**
• Service explanations and use cases
• Architecture best practices and design patterns
• Cost optimization strategies and pricing models
• Security recommendations and compliance
• Migration guidance and implementation strategies
• Troubleshooting common issues and performance optimization

What specific AWS service, concept, or use case would you like me to explain in detail?`;
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
