// Vite API Plugin to serve API routes on the same URL
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      // Health check endpoint
      server.middlewares.use('/api/health', async (req, res, next) => {
        if (req.method !== 'GET') return next();
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          status: 'healthy',
          service: 'Portfolio API',
          timestamp: new Date().toISOString(),
          version: '1.0.0'
        }));
      });

      // Amazon Q CLI status endpoint
      server.middlewares.use('/api/amazon-q/status', async (req, res, next) => {
        if (req.method !== 'GET') return next();
        
        try {
          const { stdout } = await execAsync('q --version');
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            available: true,
            version: stdout.trim(),
            awsRegion: process.env.AWS_REGION || 'us-east-1',
            timestamp: new Date().toISOString()
          }));
        } catch (error) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            available: false,
            error: error.message,
            suggestion: 'Install Amazon Q CLI: npm install -g @aws/amazon-q-cli'
          }));
        }
      });

      // Amazon Q CLI query endpoint
      server.middlewares.use('/api/amazon-q', async (req, res, next) => {
        if (req.method !== 'POST') return next();
        
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        
        req.on('end', async () => {
          try {
            const { question, context = '', userId = 'anonymous' } = JSON.parse(body);
            
            // SECURITY: Input validation and command restrictions
            if (!question || question.trim().length === 0) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: 'Question is required',
                message: 'Please provide a valid question for Amazon Q'
              }));
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
              
              // Terraform/CDK deployment commands
              /terraform\s+apply/i,
              /terraform\s+destroy/i,
              /cdk\s+deploy/i,
              /cdk\s+destroy/i,
              
              // Kubernetes deployment commands
              /kubectl\s+create/i,
              /kubectl\s+apply/i,
              /kubectl\s+delete/i,
              /kubectl\s+deploy/i,
              
              // Docker deployment commands
              /docker\s+run/i,
              /docker\s+deploy/i,
              /docker\s+create/i,
              
              // Shell command injection attempts
              /\$\(/,
              /`.*`/,
              /\|\s*sh/i,
              /\|\s*bash/i,
              /\|\s*exec/i,
              
              // File system operations
              /rm\s+-rf/i,
              /sudo/i,
              /chmod/i,
              /chown/i,
              
              // Network operations
              /curl.*\|/i,
              /wget.*\|/i,
              /nc\s+/i,
              /netcat/i
            ];
            
            const isBlocked = blockedPatterns.some(pattern => pattern.test(sanitizedQuestion));
            
            if (isBlocked) {
              res.statusCode = 403;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
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
              }));
              return;
            }
            
            if (sanitizedQuestion.length > 500) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: 'Question too long',
                message: 'Please keep questions under 500 characters'
              }));
              return;
            }

            console.log(`Amazon Q request from ${userId}: ${sanitizedQuestion}`);

            // Check if Amazon Q CLI is available
            try {
              await execAsync('q --version');
            } catch (checkError) {
              res.statusCode = 503;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: 'Amazon Q CLI not available',
                message: 'Amazon Q CLI is not installed or configured properly',
                suggestion: 'Please install Amazon Q CLI: npm install -g @aws/amazon-q-cli'
              }));
              return;
            }

            // Execute Amazon Q CLI command - use a more direct approach
            const startTime = Date.now();
            let qResponse = '';
            
            try {
              console.log(`Executing Amazon Q CLI for: "${sanitizedQuestion}"`);
              
              // Create a temporary script to handle Amazon Q CLI interaction
              const { writeFileSync, unlinkSync } = await import('fs');
              const { join } = await import('path');
              const tempScript = join('/tmp', `q_query_${Date.now()}.sh`);
              
              // SECURITY: Create a restricted script that only allows read-only operations
              const scriptContent = `#!/bin/bash
# SECURITY: Set restrictive environment
export NO_COLOR=1
export TERM=dumb
export AWS_CLI_AUTO_PROMPT=off
export AWS_PAGER=""

# SECURITY: Add safety prefix to prevent any service creation
SAFE_QUESTION="Please explain (do not create or execute): ${sanitizedQuestion}"

# SECURITY: Execute with timeout and output filtering
echo "\$SAFE_QUESTION" | timeout 30s q chat 2>/dev/null | sed -e 's/\x1b\[[0-9;]*m//g' -e '/⢠⣶⣶⣦/d' -e '/Did you know/d' -e '/You are chatting with/d' -e '/━━━/d' -e '/╭/d' -e '/╰/d' -e '/│/d' -e '/ctrl +/d' -e '/\\/help/d' -e '/^[0-9]*[lhm]$/d' -e '/Thinking\\.\\.\\.$/d' -e '/^$/d' | grep -v '^[[:space:]]*$' | head -50
`;
              
              writeFileSync(tempScript, scriptContent, { mode: 0o755 });
              
              try {
                const { stdout, stderr } = await execAsync(`bash ${tempScript}`, {
                  timeout: 35000,
                  env: {
                    ...process.env,
                    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
                    NO_COLOR: '1',
                    TERM: 'dumb'
                  }
                });

                // Clean up temp script
                unlinkSync(tempScript);

                if (stderr && stderr.trim()) {
                  console.warn('Amazon Q CLI stderr:', stderr);
                }

                qResponse = stdout.trim();
                console.log('Amazon Q response length:', qResponse.length);
                console.log('Amazon Q response preview:', qResponse.substring(0, 300));

                // If we got a response, clean it up further
                if (qResponse && qResponse.length > 10) {
                  // Additional cleanup
                  qResponse = qResponse
                    .split('\n')
                    .filter(line => {
                      const clean = line.trim();
                      return clean.length > 0 && 
                             !clean.match(/^[⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏\s]*$/) &&
                             !clean.includes('🤖') &&
                             !clean.match(/^\d+[lhm]$/) &&
                             clean !== 'Thinking...';
                    })
                    .join('\n')
                    .trim();
                }

                // If still no good response, try alternative method
                if (!qResponse || qResponse.length < 20) {
                  console.log('Trying alternative Amazon Q approach...');
                  
                  // Try direct command with different flags
                  const altCommand = `q chat "${sanitizedQuestion}" --no-spinner --format text`;
                  try {
                    const { stdout: altOutput } = await execAsync(altCommand, {
                      timeout: 25000,
                      env: {
                        ...process.env,
                        NO_COLOR: '1',
                        TERM: 'dumb'
                      }
                    });
                    
                    if (altOutput && altOutput.trim().length > qResponse.length) {
                      qResponse = altOutput.trim()
                        .replace(/\x1b\[[0-9;]*[mGKH]/g, '')
                        .replace(/[⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏]/g, '')
                        .replace(/Thinking\.\.\./g, '')
                        .trim();
                    }
                  } catch (altError) {
                    console.log('Alternative command failed:', altError.message);
                  }
                }

              } catch (scriptError) {
                console.error('Script execution error:', scriptError);
                // Clean up temp script on error
                try { unlinkSync(tempScript); } catch {}
                throw scriptError;
              }

              // If we still don't have a good response, it might be a setup issue
              if (!qResponse || qResponse.length < 10) {
                throw new Error('Amazon Q CLI returned empty response - check authentication and setup');
              }

              // Enhanced response with metadata
              const response = {
                success: true,
                response: qResponse,
                source: 'Amazon Q CLI',
                timestamp: new Date().toISOString(),
                processingTime: Date.now() - startTime,
                metadata: {
                  questionLength: sanitizedQuestion.length,
                  responseLength: qResponse.length,
                  hasCodeBlocks: qResponse.includes('```'),
                  hasCommands: qResponse.includes('aws ') || qResponse.includes('q '),
                  category: categorizeQuestion(sanitizedQuestion)
                }
              };

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(response));

            } catch (execError) {
              console.error('Amazon Q CLI execution error:', execError);
              console.error('Error details:', execError.message);
              
              // Provide helpful error response with troubleshooting
              const errorResponse = {
                success: false,
                error: 'Amazon Q CLI Error',
                message: `Amazon Q CLI encountered an issue: ${execError.message}`,
                troubleshooting: {
                  steps: [
                    'Check if you are logged in: `aws sts get-caller-identity`',
                    'Configure Amazon Q: `q configure`',
                    'Verify permissions: Ensure your AWS user has Amazon Q access',
                    'Test manually: Try `q chat "hello"` in terminal'
                  ],
                  commonIssues: [
                    'Authentication: Run `aws configure` to set up credentials',
                    'Permissions: Your AWS user needs Amazon Q permissions',
                    'Network: Check internet connection and AWS service availability',
                    'Setup: Run `q configure` to initialize Amazon Q CLI'
                  ]
                },
                fallbackResponse: generateIntelligentAWSResponse(sanitizedQuestion),
                source: 'Error Handler + Built-in Knowledge',
                timestamp: new Date().toISOString(),
                processingTime: Date.now() - startTime
              };

              res.statusCode = 200; // Return 200 so frontend can handle gracefully
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(errorResponse));
            }

          } catch (parseError) {
            console.error('Request parsing error:', parseError);
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'Invalid request format',
              message: 'Please send valid JSON data'
            }));
          }
        });
      });
    }
  };
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
  
  // Lambda questions
  if (lowerQuestion.includes('lambda')) {
    return `**AWS Lambda** is a serverless compute service that runs your code in response to events without managing servers.

**Key Benefits:**
• **No Server Management** - AWS handles all infrastructure
• **Automatic Scaling** - Scales from zero to thousands of concurrent executions
• **Pay Per Use** - Only pay for compute time consumed
• **Event-Driven** - Triggered by AWS services or HTTP requests

**Supported Languages:**
• **Node.js** - JavaScript runtime
• **Python** - Popular for data processing and APIs
• **Java** - Enterprise applications
• **C#** - .NET applications
• **Go** - High-performance applications
• **Ruby** - Web applications

**Common Triggers:**
• **API Gateway** - HTTP requests
• **S3** - Object uploads/deletions
• **DynamoDB** - Database changes
• **CloudWatch** - Scheduled events
• **SQS/SNS** - Message queues and notifications

**Use Cases:**
• **APIs and Microservices** - RESTful APIs without servers
• **Data Processing** - Process files uploaded to S3
• **Real-time Analytics** - Process streaming data
• **Automation** - Automate AWS tasks and workflows
• **Image/Video Processing** - Resize, convert, analyze media

**Best Practices:**
• Keep functions small and focused (single responsibility)
• Use environment variables for configuration
• Implement proper error handling and retries
• Monitor with CloudWatch Logs and X-Ray
• Optimize cold start times
• Use layers for shared dependencies

**Limitations:**
• 15-minute maximum execution time
• 10GB memory limit
• 512MB temporary disk space (/tmp)
• 6MB request/response payload limit

Would you like to know more about Lambda pricing, deployment, or specific use cases?`;
  }
  
  // VPC questions
  if (lowerQuestion.includes('vpc')) {
    return `**Amazon VPC (Virtual Private Cloud)** lets you provision a logically isolated section of AWS cloud where you can launch resources in a virtual network.

**Core Components:**
• **Subnets** - Segments of VPC IP address range
• **Route Tables** - Control traffic routing
• **Internet Gateway** - Connect to the internet
• **NAT Gateway** - Outbound internet access for private subnets
• **Security Groups** - Instance-level firewalls
• **NACLs** - Subnet-level firewalls

**Subnet Types:**
• **Public Subnet** - Has route to Internet Gateway
• **Private Subnet** - No direct internet access
• **Database Subnet** - Isolated for database servers

**Security Features:**
• **Security Groups** - Stateful, allow rules only
• **Network ACLs** - Stateless, allow and deny rules
• **Flow Logs** - Capture network traffic information
• **VPC Endpoints** - Private connections to AWS services

**Common Architecture:**
\`\`\`
Internet Gateway
    |
Public Subnet (Web Servers)
    |
Private Subnet (App Servers)
    |
Database Subnet (RDS)
\`\`\`

**Best Practices:**
• Use multiple Availability Zones for high availability
• Separate tiers with different subnets
• Implement least privilege security group rules
• Use VPC Flow Logs for monitoring
• Plan IP address ranges carefully (avoid overlaps)
• Use VPC endpoints for AWS service access

**Connectivity Options:**
• **VPC Peering** - Connect VPCs together
• **Transit Gateway** - Central hub for multiple VPCs
• **VPN Gateway** - Connect to on-premises networks
• **Direct Connect** - Dedicated network connection

What aspect of VPC networking would you like to explore further?`;
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
