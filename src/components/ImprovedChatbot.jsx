import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../utils/ThemeContext';
import amazonQ from '../utils/amazonQIntegration';

const ImprovedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amazonQStatus, setAmazonQStatus] = useState({ available: false });
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 **Hello! I'm Amazon Q, your AI assistant.**\n\nI'm here to help you with a wide range of topics including:\n\n**🔧 Software Development:**\n• Code generation and debugging\n• Best practices and architecture\n• Programming languages and frameworks\n• Code reviews and optimization\n\n**☁️ AWS & Cloud:**\n• AWS services and solutions\n• Cloud architecture and design\n• DevOps and infrastructure\n• Cost optimization and security\n\n**📚 General Knowledge:**\n• Technical explanations and tutorials\n• Problem-solving and troubleshooting\n• Research and analysis\n• Learning and skill development\n\n**💡 How I can help:**\n• Answer technical questions with detailed explanations\n• Provide code examples and solutions\n• Explain complex concepts in simple terms\n• Offer best practices and recommendations\n• Help with learning and skill development\n\nWhat would you like to know or work on today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const [conversationContext, setConversationContext] = useState([]);
  const messagesEndRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    
    // Check Amazon Q availability on component mount
    amazonQ.checkAvailability().then(status => {
      setAmazonQStatus(status);
      console.log('Amazon Q CLI status:', status);
    });
  }, [messages]);

  // Check if question should use Amazon Q CLI
  const shouldUseAmazonQ = (question) => {
    return amazonQ.shouldUseAmazonQ(question) && amazonQStatus.available;
  };

  // Helper function to determine season
  const getSeason = (date) => {
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    
    if ((month === 12 && day >= 21) || (month <= 2) || (month === 3 && day < 20)) {
      return 'Winter ❄️';
    } else if ((month === 3 && day >= 20) || (month <= 5) || (month === 6 && day < 21)) {
      return 'Spring 🌸';
    } else if ((month === 6 && day >= 21) || (month <= 8) || (month === 9 && day < 23)) {
      return 'Summer ☀️';
    } else {
      return 'Autumn 🍂';
    }
  };

  // Helper function to check if year is leap year
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  // Generate comprehensive Amazon Q style responses for any topic
  const generateComprehensiveAmazonQResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // CKA - Certified Kubernetes Administrator
    if (lowerQuestion.includes('cka') || lowerQuestion.includes('certified kubernetes administrator')) {
      return `The **Certified Kubernetes Administrator (CKA)** is a performance-based certification that validates your skills in administering Kubernetes clusters.

**Exam Overview:**
• **Duration:** 2 hours
• **Format:** Performance-based, hands-on tasks in a live Kubernetes environment
• **Passing Score:** 66%
• **Validity:** 3 years
• **Cost:** $395 USD (includes one free retake)

**Key Exam Domains:**

**1. Cluster Architecture, Installation & Configuration (25%)**
• Manage role-based access control (RBAC)
• Use Kubeadm to install a basic cluster
• Manage a highly-available Kubernetes cluster
• Provision underlying infrastructure to deploy a Kubernetes cluster
• Perform a version upgrade on a Kubernetes cluster using Kubeadm
• Implement etcd backup and restore

**2. Workloads & Scheduling (15%)**
• Understand deployments and how to perform rolling update and rollbacks
• Use ConfigMaps and Secrets to configure applications
• Know how to scale applications
• Understand the primitives used to create robust, self-healing, application deployments
• Understand how resource limits can affect Pod scheduling
• Awareness of manifest management and common templating tools

**3. Services & Networking (20%)**
• Understand host networking configuration on the cluster nodes
• Understand connectivity between Pods
• Understand ClusterIP, NodePort, LoadBalancer service types and endpoints
• Know how to use Ingress controllers and Ingress resources
• Know how to configure and use CoreDNS
• Choose an appropriate container network interface plugin

**4. Storage (10%)**
• Understand storage classes, persistent volumes
• Understand volume mode, access modes and reclaim policies for volumes
• Understand persistent volume claims primitive
• Know how to configure applications with persistent storage

**5. Troubleshooting (30%)**
• Evaluate cluster and node logging
• Understand how to monitor applications
• Manage container stdout & stderr logs
• Troubleshoot application failure
• Troubleshoot cluster component failure
• Troubleshoot networking

**Preparation Strategy:**

**Hands-on Practice:**
• Set up your own Kubernetes cluster using kubeadm
• Practice all exam objectives in a real environment
• Use kubectl extensively - memorize common commands
• Practice troubleshooting scenarios regularly

**Recommended Study Resources:**
• **Official Kubernetes Documentation** - Primary reference during exam
• **Kubernetes the Hard Way** - Deep understanding of cluster setup
• **Practice Labs:** KodeKloud, A Cloud Guru, Linux Academy
• **Books:** "Kubernetes in Action" by Marko Lukša

**Essential kubectl Commands to Master:**
\`\`\`bash
# Cluster management
kubectl get nodes
kubectl describe node <node-name>
kubectl drain <node-name>
kubectl uncordon <node-name>

# Pod management
kubectl get pods -A
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- /bin/bash

# Deployments and services
kubectl create deployment <name> --image=<image>
kubectl expose deployment <name> --port=80 --target-port=8080
kubectl scale deployment <name> --replicas=3

# Troubleshooting
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl top nodes
kubectl top pods
\`\`\`

**Exam Tips:**
• **Time Management:** Practice completing tasks quickly
• **Bookmarks:** Prepare bookmarks for Kubernetes documentation
• **Imperative Commands:** Use kubectl run, create, expose for speed
• **YAML Generation:** Use --dry-run=client -o yaml to generate manifests
• **Troubleshooting:** Always check logs, events, and resource status

**Career Benefits:**
• Validates expertise in Kubernetes administration
• High demand in DevOps and cloud engineering roles
• Average salary increase of 15-25% post-certification
• Recognition from CNCF (Cloud Native Computing Foundation)

Would you like me to elaborate on any specific exam domain or provide practice scenarios for particular topics?`;
    }
    
    // Kubernetes general questions
    if (lowerQuestion.includes('kubernetes') || lowerQuestion.includes('k8s')) {
      return `**Kubernetes** is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

**Core Architecture:**

**Master Components:**
• **API Server (kube-apiserver)** - Central management entity, exposes Kubernetes API
• **etcd** - Distributed key-value store for cluster data
• **Controller Manager** - Runs controller processes (replication, endpoints, etc.)
• **Scheduler** - Assigns pods to nodes based on resource requirements

**Node Components:**
• **kubelet** - Agent that communicates with master and manages pods
• **kube-proxy** - Network proxy maintaining network rules
• **Container Runtime** - Docker, containerd, or CRI-O

**Key Objects and Resources:**

**Workload Resources:**
• **Pods** - Smallest deployable units, contain one or more containers
• **Deployments** - Manage replica sets and rolling updates
• **StatefulSets** - For stateful applications requiring stable identities
• **DaemonSets** - Ensure pods run on all (or selected) nodes
• **Jobs/CronJobs** - Run batch workloads and scheduled tasks

**Service and Networking:**
• **Services** - Stable network endpoints (ClusterIP, NodePort, LoadBalancer)
• **Ingress** - HTTP/HTTPS routing and load balancing
• **NetworkPolicies** - Control traffic flow between pods
• **DNS** - Service discovery within the cluster

**Configuration and Storage:**
• **ConfigMaps** - Store non-confidential configuration data
• **Secrets** - Store sensitive information (passwords, tokens, keys)
• **Persistent Volumes (PV)** - Cluster-wide storage resources
• **Persistent Volume Claims (PVC)** - User requests for storage

**Common Use Cases:**

**Microservices Architecture:**
• Deploy and manage multiple interconnected services
• Independent scaling and updates for each service
• Service mesh integration (Istio, Linkerd)

**CI/CD Integration:**
• Automated deployment pipelines
• Blue-green and canary deployments
• GitOps workflows with ArgoCD or Flux

**Auto-scaling and Load Management:**
• Horizontal Pod Autoscaler (HPA) based on CPU/memory
• Vertical Pod Autoscaler (VPA) for resource optimization
• Cluster Autoscaler for node management

**Best Practices:**

**Resource Management:**
• Set resource requests and limits for all containers
• Use namespaces for logical separation
• Implement proper RBAC (Role-Based Access Control)
• Regular backup of etcd data

**Security:**
• Use non-root containers and read-only filesystems
• Implement Pod Security Standards
• Network segmentation with NetworkPolicies
• Regular security scanning of container images

**Monitoring and Observability:**
• Deploy Prometheus and Grafana for metrics
• Centralized logging with ELK or EFK stack
• Distributed tracing with Jaeger or Zipkin
• Health checks and readiness probes

**Deployment Strategies:**
\`\`\`yaml
# Example Deployment with best practices
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5
\`\`\`

**Learning Path:**
1. **Fundamentals** - Containers, Docker basics
2. **Core Concepts** - Pods, Services, Deployments
3. **Networking** - Service types, Ingress, DNS
4. **Storage** - Volumes, PV/PVC, Storage Classes
5. **Security** - RBAC, Pod Security, Network Policies
6. **Advanced** - Custom Resources, Operators, Service Mesh

What specific aspect of Kubernetes would you like me to explain in more detail?`;
    }
    
    // Docker questions
    if (lowerQuestion.includes('docker')) {
      return `**Docker** is a containerization platform that packages applications and their dependencies into lightweight, portable containers.

**Core Concepts:**

**Images and Containers:**
• **Docker Image** - Read-only template containing application code, runtime, libraries, and dependencies
• **Container** - Running instance of an image, isolated from the host system
• **Dockerfile** - Text file with instructions to build an image
• **Registry** - Storage and distribution system for Docker images (Docker Hub, ECR, etc.)

**Docker Architecture:**
• **Docker Daemon (dockerd)** - Background service managing containers
• **Docker Client** - Command-line interface for interacting with daemon
• **Docker Registry** - Stores and distributes Docker images
• **Docker Objects** - Images, containers, networks, volumes, plugins

**Essential Docker Commands:**

**Image Management:**
\`\`\`bash
# Build image from Dockerfile
docker build -t myapp:latest .

# Pull image from registry
docker pull nginx:latest

# List local images
docker images

# Remove image
docker rmi image_name:tag

# Push image to registry
docker push myapp:latest
\`\`\`

**Container Management:**
\`\`\`bash
# Run container
docker run -d -p 8080:80 --name webserver nginx

# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop container_name

# Remove container
docker rm container_name

# Execute command in running container
docker exec -it container_name /bin/bash

# View container logs
docker logs container_name
\`\`\`

**Dockerfile Best Practices:**

**Multi-stage Builds:**
\`\`\`dockerfile
# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:16-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
\`\`\`

**Optimization Techniques:**
• **Use specific tags** instead of 'latest' for reproducible builds
• **Minimize layers** by combining RUN commands
• **Use .dockerignore** to exclude unnecessary files
• **Run as non-root user** for security
• **Use multi-stage builds** to reduce final image size
• **Leverage build cache** by ordering instructions properly

**Docker Compose for Multi-container Applications:**
\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
  
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

**Networking:**
• **Bridge Network** - Default network for containers on same host
• **Host Network** - Container shares host's network stack
• **Overlay Network** - Multi-host networking for Docker Swarm
• **Custom Networks** - User-defined networks for container communication

**Storage and Volumes:**
• **Bind Mounts** - Mount host directory into container
• **Named Volumes** - Docker-managed storage with lifecycle management
• **tmpfs Mounts** - Temporary filesystem in memory
• **Volume Drivers** - Third-party storage solutions

**Security Best Practices:**

**Image Security:**
• Use official base images from trusted sources
• Regularly update base images and dependencies
• Scan images for vulnerabilities (docker scan, Trivy, Clair)
• Use minimal base images (Alpine, distroless)

**Runtime Security:**
• Run containers as non-root user
• Use read-only filesystems when possible
• Limit container capabilities and system calls
• Implement resource constraints (CPU, memory)
• Use secrets management for sensitive data

**Production Considerations:**

**Logging and Monitoring:**
• Configure logging drivers for centralized logging
• Implement health checks for container monitoring
• Use monitoring tools (Prometheus, Grafana, DataDog)
• Set up alerting for container failures

**Orchestration:**
• Use Kubernetes for production container orchestration
• Implement proper service discovery and load balancing
• Configure auto-scaling based on metrics
• Plan for disaster recovery and backup strategies

**Common Use Cases:**
• **Application Packaging** - Consistent deployment across environments
• **Microservices** - Isolate and scale individual services
• **CI/CD Pipelines** - Build, test, and deploy applications
• **Development Environments** - Standardized development setups
• **Legacy Application Modernization** - Containerize existing applications

Would you like me to dive deeper into any specific Docker concept, such as networking, security, or optimization techniques?`;
    }
    
    // Programming questions
    if (lowerQuestion.includes('python') || lowerQuestion.includes('javascript') || lowerQuestion.includes('java') || lowerQuestion.includes('programming') || lowerQuestion.includes('code')) {
      return `I can help you with programming and software development across multiple languages and technologies.

**Programming Languages I can assist with:**

**Python:**
• **Web Development** - Django, Flask, FastAPI frameworks
• **Data Science** - NumPy, Pandas, Matplotlib, Scikit-learn
• **Machine Learning** - TensorFlow, PyTorch, Keras
• **Automation** - Scripting, web scraping, task automation
• **Best Practices** - PEP 8, virtual environments, testing with pytest

**JavaScript/TypeScript:**
• **Frontend** - React, Vue.js, Angular, vanilla JavaScript
• **Backend** - Node.js, Express.js, NestJS
• **Full-stack** - MEAN, MERN, JAMstack architectures
• **Modern Features** - ES6+, async/await, modules, TypeScript types
• **Testing** - Jest, Cypress, Testing Library

**Java:**
• **Enterprise Development** - Spring Boot, Spring Framework
• **Microservices** - Spring Cloud, service mesh patterns
• **Build Tools** - Maven, Gradle
• **Testing** - JUnit, Mockito, integration testing
• **Performance** - JVM tuning, profiling, optimization

**Other Languages:**
• **Go** - Concurrency, web services, CLI tools
• **C#/.NET** - ASP.NET Core, Entity Framework, Azure integration
• **Rust** - Systems programming, memory safety, performance
• **PHP** - Laravel, Symfony, modern PHP practices

**Software Development Concepts:**

**Architecture Patterns:**
• **MVC/MVP/MVVM** - Separation of concerns in applications
• **Microservices** - Distributed system design and communication
• **Event-Driven Architecture** - Asynchronous processing and messaging
• **Clean Architecture** - Dependency inversion and testable code
• **Domain-Driven Design** - Business logic organization

**Best Practices:**
• **SOLID Principles** - Object-oriented design principles
• **Code Quality** - Linting, formatting, code reviews
• **Testing** - Unit, integration, end-to-end testing strategies
• **Documentation** - API documentation, code comments, README files
• **Version Control** - Git workflows, branching strategies

**Development Tools and Practices:**

**IDEs and Editors:**
• **VS Code** - Extensions, debugging, integrated terminal
• **IntelliJ IDEA** - Java development, refactoring tools
• **PyCharm** - Python development, scientific tools
• **Vim/Neovim** - Efficient text editing and customization

**DevOps Integration:**
• **CI/CD Pipelines** - GitHub Actions, GitLab CI, Jenkins
• **Containerization** - Docker, Kubernetes deployment
• **Infrastructure as Code** - Terraform, CloudFormation
• **Monitoring** - Application performance monitoring, logging

**Database Integration:**
• **Relational Databases** - PostgreSQL, MySQL, SQL optimization
• **NoSQL Databases** - MongoDB, Redis, DynamoDB
• **ORMs and Query Builders** - SQLAlchemy, Hibernate, Prisma
• **Database Design** - Normalization, indexing, performance tuning

**API Development:**
• **REST APIs** - Design principles, HTTP methods, status codes
• **GraphQL** - Schema design, resolvers, query optimization
• **Authentication** - JWT, OAuth 2.0, session management
• **API Documentation** - OpenAPI/Swagger, Postman collections

**Example Code Assistance:**

I can help you with:
• **Code Review** - Identify issues and suggest improvements
• **Debugging** - Troubleshoot errors and performance problems
• **Algorithm Implementation** - Data structures, sorting, searching
• **Design Patterns** - Singleton, Factory, Observer, Strategy patterns
• **Code Optimization** - Performance improvements and refactoring

**Learning Resources and Career Guidance:**
• **Skill Development** - Learning paths for different technologies
• **Project Ideas** - Portfolio projects and practical applications
• **Interview Preparation** - Coding challenges, system design questions
• **Industry Trends** - Emerging technologies and best practices

What specific programming topic, language, or challenge would you like help with? I can provide code examples, explain concepts, or help troubleshoot specific issues you're facing.`;
    }
    
    // Default comprehensive response for any topic
    return `I'm Amazon Q, and I can provide comprehensive assistance on a wide range of topics. Based on your question about "${question}", let me help you with detailed information and guidance.

**How I can assist you:**

**🔧 Technical Topics:**
• **Software Development** - Programming languages, frameworks, best practices
• **Cloud Computing** - AWS services, architecture, migration strategies
• **DevOps** - CI/CD, containerization, infrastructure automation
• **Data & Analytics** - Databases, data processing, machine learning
• **Security** - Best practices, compliance, threat mitigation

**📚 Learning & Problem Solving:**
• **Concept Explanations** - Break down complex topics into understandable parts
• **Step-by-step Guidance** - Detailed tutorials and implementation guides
• **Best Practices** - Industry standards and proven approaches
• **Troubleshooting** - Identify issues and provide solutions
• **Career Guidance** - Skill development and professional growth

**💡 Approach to Your Question:**
To provide the most helpful response about "${question}", I can:

• **Explain the fundamentals** - Core concepts and principles
• **Provide practical examples** - Real-world applications and use cases
• **Share best practices** - Proven approaches and recommendations
• **Offer implementation guidance** - Step-by-step instructions
• **Suggest learning resources** - Further reading and skill development

**Getting More Specific Help:**
For the most tailored assistance, you could:
• **Specify your context** - Are you learning, implementing, or troubleshooting?
• **Share your experience level** - Beginner, intermediate, or advanced?
• **Describe your goals** - What are you trying to achieve?
• **Mention constraints** - Any specific requirements or limitations?

**Popular Topics I Excel At:**
• **AWS Services** - EC2, S3, Lambda, RDS, VPC, and 200+ other services
• **Kubernetes** - Container orchestration, deployments, best practices
• **Programming** - Python, JavaScript, Java, Go, and many other languages
• **Architecture** - System design, microservices, scalability patterns
• **Security** - Cloud security, application security, compliance

What specific aspect of "${question}" would you like me to focus on? I'm designed to provide detailed, practical, and actionable information to help you succeed.`;
  };

  // Security function to validate and sanitize user input
  const validateAndSanitizeInput = (input) => {
    if (!input || input.trim().length === 0) {
      return { valid: false, error: 'Please enter a question' };
    }

    const sanitized = input.trim();
    
    // Security: Block dangerous patterns
    const blockedPatterns = [
      // MCP server usage
      /mcp[_-]?server/i,
      /mcp.*invoke/i,
      /mcp.*tool/i,
      
      // AWS service creation/modification
      /aws\s+.*create/i,
      /aws\s+.*delete/i,
      /aws\s+.*modify/i,
      /aws\s+.*update/i,
      /aws\s+.*deploy/i,
      /aws\s+.*launch/i,
      /aws\s+.*terminate/i,
      
      // Infrastructure deployment
      /terraform\s+apply/i,
      /terraform\s+destroy/i,
      /cdk\s+deploy/i,
      /kubectl\s+create/i,
      /kubectl\s+apply/i,
      /docker\s+run/i,
      
      // Command injection attempts
      /\$\(/,
      /`.*`/,
      /\|\s*sh/i,
      /\|\s*bash/i,
      /sudo/i
    ];
    
    const isBlocked = blockedPatterns.some(pattern => pattern.test(sanitized));
    
    if (isBlocked) {
      return { 
        valid: false, 
        error: 'Security Restriction: This request contains commands that could affect cloud services. Please ask conceptual questions instead.',
        suggestion: 'Try asking: "How does AWS S3 work?" instead of "Create an S3 bucket"'
      };
    }
    
    if (sanitized.length > 500) {
      return { valid: false, error: 'Question is too long. Please keep it under 500 characters.' };
    }
    
    return { valid: true, sanitized };
  };

  const handleSendMessage = async (messageText) => {
    // Security validation
    const validation = validateAndSanitizeInput(messageText);
    if (!validation.valid) {
      const errorMessage = {
        id: Date.now(),
        text: `🚫 **${validation.error}**${validation.suggestion ? `\n\n💡 **Suggestion:** ${validation.suggestion}` : ''}`,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setMessage('');
      return;
    }

    const sanitizedMessage = validation.sanitized;

    const userMessage = {
      id: Date.now(),
      text: sanitizedMessage,
      isBot: false,
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setMessage('');
    setIsTyping(true);

    // Update conversation context
    setConversationContext(prev => [...prev.slice(-10), sanitizedMessage]);

    setTimeout(async () => {
      try {
        console.log('Getting intelligent response for:', sanitizedMessage);
        
        let botResponse = generateComprehensiveAmazonQResponse(sanitizedMessage);

        // Check if this should use Amazon Q CLI
        if (shouldUseAmazonQ(sanitizedMessage)) {
          console.log('Routing to Amazon Q CLI...');
          
          try {
            const qResponse = await amazonQ.query(sanitizedMessage, '', 'portfolio-user');
            const formattedResponse = amazonQ.formatResponse(qResponse, sanitizedMessage);
            botResponse = formattedResponse;
          } catch (qError) {
            console.error('Amazon Q error, using fallback:', qError);
            botResponse = `🤖 **AWS Question Detected**\n\nI can help with AWS and DevOps topics! While Amazon Q CLI is not available right now, I can still provide comprehensive information about:\n\n• **AWS Services:** EC2, S3, Lambda, RDS, VPC, CloudFormation\n• **DevOps Tools:** Kubernetes, Docker, Terraform, CI/CD\n• **Best Practices:** Security, cost optimization, architecture\n• **Troubleshooting:** Common issues and solutions\n\nWhat specific AWS or DevOps topic would you like me to explain?`;
          }
        } else {
          // Handle different types of questions
          const lowerMessage = sanitizedMessage.toLowerCase();
          
          // Real-time information queries
          if (lowerMessage.includes('date') || lowerMessage.includes('today') || lowerMessage.includes('time')) {
            const now = new Date();
            const dateOptions = { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            };
            const timeOptions = { 
              hour: '2-digit', 
              minute: '2-digit', 
              second: '2-digit',
              timeZoneName: 'short'
            };
            
            const currentDate = now.toLocaleDateString('en-US', dateOptions);
            const currentTime = now.toLocaleTimeString('en-US', timeOptions);
            const timestamp = now.toISOString();
            
            botResponse = `📅 **Current Date & Time Information**

**Today's Date:** ${currentDate}
**Current Time:** ${currentTime}
**ISO Timestamp:** ${timestamp}
**Unix Timestamp:** ${now.getTime()}

**Additional Information:**
• **Day of Year:** ${Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))}
• **Week Number:** ${Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + new Date(now.getFullYear(), 0, 1).getDay() + 1) / 7)}
• **Quarter:** Q${Math.floor((now.getMonth() + 3) / 3)} ${now.getFullYear()}
• **Season:** ${getSeason(now)}

**Time Zone Information:**
• **Your Local Time Zone:** ${Intl.DateTimeFormat().resolvedOptions().timeZone}
• **UTC Offset:** ${now.getTimezoneOffset() / -60} hours

**Fun Facts:**
• This year ${now.getFullYear()} ${isLeapYear(now.getFullYear()) ? 'is' : 'is not'} a leap year
• Days until New Year: ${Math.ceil((new Date(now.getFullYear() + 1, 0, 1) - now) / (1000 * 60 * 60 * 24))}
• Days since New Year: ${Math.floor((now - new Date(now.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)) + 1}

Is there anything specific about dates, times, or calendars you'd like to know more about?`;
          }
          
          // Weather queries
          else if (lowerMessage.includes('weather')) {
            botResponse = `🌤️ **Weather Information**

I don't have access to real-time weather data, but I can help you understand weather and direct you to reliable sources:

**For Current Weather:**
• **Weather.com** - Comprehensive forecasts and radar
• **AccuWeather** - Detailed local conditions
• **National Weather Service** - Official government forecasts
• **Weather apps** on your phone for location-based updates

**Understanding Weather:**
• **Temperature** - Affected by season, latitude, altitude, and proximity to water
• **Precipitation** - Rain, snow, sleet depend on atmospheric moisture and temperature
• **Pressure Systems** - High pressure brings clear skies, low pressure brings storms
• **Humidity** - Amount of water vapor in the air affects comfort

**Weather Patterns:**
• **Fronts** - Boundaries between air masses cause weather changes
• **Seasonal Variations** - Predictable patterns based on Earth's tilt and orbit
• **Local Effects** - Mountains, lakes, and urban areas create microclimates

**Climate vs Weather:**
• **Weather** - Short-term atmospheric conditions (daily/weekly)
• **Climate** - Long-term patterns over decades
• **Climate Change** - Long-term shifts in global weather patterns

For accurate, up-to-date weather information for your specific location, I recommend checking your local weather service or a reliable weather app.

What specific weather topic would you like me to explain?`;
          }
          
          // Current events and news
          else if (lowerMessage.includes('news') || lowerMessage.includes('current events') || lowerMessage.includes('latest')) {
            botResponse = `📰 **Current Events & News**

I don't have access to real-time news feeds, but I can guide you to reliable news sources and help you understand how to stay informed:

**Reliable News Sources:**
• **Reuters** - International news agency, factual reporting
• **Associated Press (AP)** - Non-profit news cooperative
• **BBC News** - British public service broadcaster
• **NPR** - National Public Radio, in-depth analysis
• **PBS NewsHour** - Public television news program

**News Categories:**
• **Breaking News** - Immediate, developing stories
• **Politics** - Government, elections, policy changes
• **Business** - Markets, economy, corporate news
• **Technology** - Innovation, cybersecurity, digital trends
• **Science** - Research, discoveries, health developments
• **International** - Global events, diplomacy, conflicts

**Media Literacy Tips:**
• **Check Multiple Sources** - Cross-reference important stories
• **Verify Information** - Look for primary sources and official statements
• **Understand Bias** - All sources have some perspective
• **Fact-Check** - Use sites like Snopes, FactCheck.org, PolitiFact
• **Be Skeptical** - Question sensational headlines and unverified claims

**Staying Informed:**
• **News Aggregators** - Google News, Apple News for diverse perspectives
• **Newsletters** - Curated content from trusted journalists
• **Podcasts** - In-depth analysis and discussion
• **Social Media** - Useful for breaking news but verify through reliable sources

**Current Global Trends (General):**
• **Technology** - AI development, cybersecurity, space exploration
• **Climate** - Environmental policies, renewable energy adoption
• **Geopolitics** - International relations, trade agreements
• **Health** - Medical breakthroughs, public health initiatives

What type of current information or news topic interests you most?`;
          }
          
          else if (lowerMessage.includes('vaibhav')) {
            botResponse = `👨‍💻 **About Vaibhav**\n\nVaibhav is a Senior DevOps Engineer at Inexture Solutions with extensive experience in:\n\n**Technical Expertise:**\n• **Cloud Platforms:** AWS (certified), Azure, GCP\n• **Container Orchestration:** Kubernetes, Docker, ECS/EKS\n• **Infrastructure as Code:** Terraform, CloudFormation, CDK\n• **CI/CD:** Jenkins, GitLab CI, GitHub Actions, AWS CodePipeline\n• **Monitoring:** Prometheus, Grafana, CloudWatch, ELK Stack\n\n**Professional Experience:**\n• Designing and implementing scalable cloud architectures\n• Automating deployment pipelines and infrastructure provisioning\n• Optimizing costs and performance for enterprise applications\n• Leading DevOps transformation initiatives\n• Mentoring junior engineers and driving best practices\n\n**Certifications:**\n• AWS Certified Solutions Architect\n• Kubernetes Administrator (CKA)\n• Terraform Associate\n\n**Key Achievements:**\n• Reduced deployment time by 80% through automation\n• Implemented multi-region disaster recovery solutions\n• Led migration of legacy applications to cloud-native architectures\n• Established monitoring and alerting systems for 99.9% uptime\n\nWhat specific aspect of Vaibhav's experience would you like to know more about?`;
          } else if (lowerMessage.includes('kubernetes') || lowerMessage.includes('docker')) {
            botResponse = `🚀 **Container Technologies**\n\n**Kubernetes:**\nKubernetes is a powerful container orchestration platform that automates deployment, scaling, and management of containerized applications.\n\n**Key Concepts:**\n• **Pods:** Smallest deployable units containing one or more containers\n• **Services:** Stable network endpoints for accessing pods\n• **Deployments:** Manage replica sets and rolling updates\n• **ConfigMaps & Secrets:** Configuration and sensitive data management\n• **Ingress:** HTTP/HTTPS routing to services\n\n**Docker:**\nDocker provides containerization technology for packaging applications with their dependencies.\n\n**Benefits:**\n• **Consistency:** Same environment across development, testing, and production\n• **Portability:** Run anywhere Docker is supported\n• **Efficiency:** Lightweight compared to virtual machines\n• **Scalability:** Easy horizontal scaling\n• **Isolation:** Applications run in isolated environments\n\n**Best Practices:**\n• Use multi-stage builds to optimize image size\n• Implement health checks for reliability\n• Follow security best practices (non-root users, minimal base images)\n• Use proper resource limits and requests\n• Implement proper logging and monitoring\n\nWhat specific aspect of containerization would you like me to explain further?`;
          } else {
            // General response for other topics
            botResponse = `🤖 **I'm here to help with "${messageText}"!**\n\nI can provide comprehensive information on a wide range of topics:\n\n**🔬 Science & Technology:**\n• Physics, Chemistry, Biology, Mathematics\n• Artificial Intelligence, Quantum Computing\n• Software Development, Programming Languages\n\n**📚 Knowledge & Learning:**\n• History, Geography, Literature, Philosophy\n• Social Sciences, Psychology, Economics\n• Current Events and Analysis\n\n**💼 Professional Topics:**\n• DevOps, Cloud Computing, AWS Services\n• Business Strategy, Finance, Career Guidance\n• Project Management, Leadership\n\n**🌍 Practical Information:**\n• How things work, Step-by-step guides\n• Problem-solving approaches\n• Best practices and recommendations\n\nCould you be more specific about what aspect of "${messageText}" you'd like me to explain? The more details you provide, the better I can tailor my response to your needs!`;
          }
        }
        
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Chatbot error:', error);
        const errorMessage = {
          id: Date.now() + 1,
          text: "🤖 **I'm here to help!**\n\nI can provide detailed information about:\n• Vaibhav's DevOps experience and achievements\n• Kubernetes, Terraform, AWS, and cloud technologies\n• DevOps career guidance and best practices\n\nWhat would you like to know? 🚀",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(message);
    }
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded text-sm">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-2 overflow-x-auto text-sm"><code>$1</code></pre>')
      .replace(/\n/g, '<br>');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          backgroundColor: isOpen ? '#dc2626' : '#2563eb'
        }}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Amazon Q</h3>
                  <p className="text-sm opacity-90">
                    AI Assistant
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.isBot 
                      ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}>
                    <div 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    <div className={`text-xs mt-2 opacity-70 ${msg.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {msg.source && ` • ${msg.source}`}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={() => handleSendMessage(message)}
                  disabled={isTyping || !message.trim()}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImprovedChatbot;
