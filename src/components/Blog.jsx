import React, { useState, useMemo } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // Simple blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Migrating 240+ Azure Resources to Terraform: A Complete Guide",
      excerpt: "Learn how I successfully migrated over 240 Azure resources to Infrastructure as Code using Terraform, reducing deployment time by 70%.",
      content: `
# Migrating 240+ Azure Resources to Terraform

## The Challenge
When I joined the project, the Azure infrastructure was managed manually through the Azure portal. With over 240 resources across multiple environments, this approach was becoming unsustainable.

## The Solution: Infrastructure as Code
I decided to migrate everything to Terraform-based Infrastructure as Code (IaC). This would enable:
- **Version Control**: Track all infrastructure changes
- **Automation**: Eliminate manual deployment errors
- **Consistency**: Ensure identical environments
- **Scalability**: Easy replication across environments

## Implementation Strategy

### 1. Resource Inventory
First, I catalogued all existing Azure resources:
- App Services
- API Management instances
- Logic Apps
- Service Bus namespaces
- Storage Accounts
- Key Vaults

### 2. Terraform Module Design
I created reusable, dynamic Terraform modules for each service type.

### 3. Standardization
Implemented consistent naming conventions and tagging policies.

## Results
The migration delivered impressive results:
- **70% reduction** in deployment time
- **Zero configuration drift**
- **Automated infrastructure provisioning**
- **Improved disaster recovery capabilities**

This project transformed our infrastructure management from a manual, error-prone process to a fully automated, version-controlled system.
      `,
      category: "terraform",
      tags: ["terraform", "azure", "iac", "devops", "automation"],
      author: "Vaibhav Soni",
      date: "Jan 15, 2024",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Kubernetes Production Deployment: Kafka & Zookeeper on DigitalOcean",
      excerpt: "A comprehensive guide to deploying and managing Kafka and Zookeeper clusters on Kubernetes in production environments.",
      content: `
# Kubernetes Production Deployment: Kafka & Zookeeper

## Overview
Deploying Kafka and Zookeeper on Kubernetes requires careful planning for production workloads. This guide covers the complete setup process.

## Architecture Design

### Zookeeper Cluster
- **StatefulSet**: Ensures stable network identities
- **Persistent Volumes**: Data persistence across pod restarts
- **Anti-affinity**: Distribute pods across nodes

### Kafka Cluster
- **StatefulSet**: Maintains broker identities
- **ConfigMaps**: External configuration management
- **Services**: Internal and external connectivity

## Implementation Steps

### 1. Namespace Setup
\`\`\`yaml
apiVersion: v1
kind: Namespace
metadata:
  name: kafka-system
\`\`\`

### 2. Zookeeper Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: zookeeper
spec:
  serviceName: zookeeper-headless
  replicas: 3
\`\`\`

### 3. Kafka Configuration
\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: kafka-config
data:
  server.properties: |
    broker.id=-1
    listeners=PLAINTEXT://:9092
\`\`\`

## Production Considerations
- **Resource Limits**: CPU and memory allocation
- **Storage**: High-performance persistent volumes
- **Monitoring**: Prometheus metrics integration
- **Security**: RBAC and network policies

This project demonstrated the power of Kubernetes for running complex, distributed systems in production environments.
      `,
      category: "kubernetes",
      tags: ["kubernetes", "digitalocean", "kafka", "zookeeper", "containers"],
      author: "Vaibhav Soni",
      date: "Jan 10, 2024",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Docker Container Optimization: Security and Performance Best Practices",
      excerpt: "Essential techniques for optimizing Docker containers for production use, focusing on security hardening and performance improvements.",
      content: `
# Docker Container Optimization

## Security Best Practices

### 1. Use Minimal Base Images
\`\`\`dockerfile
# Instead of ubuntu:latest
FROM alpine:3.18
\`\`\`

### 2. Non-Root User
\`\`\`dockerfile
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs
\`\`\`

### 3. Multi-Stage Builds
\`\`\`dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM alpine:3.18 AS runtime
COPY --from=builder /app/node_modules ./node_modules
\`\`\`

## Performance Optimization

### Layer Caching
- Order instructions by change frequency
- Combine RUN commands
- Use .dockerignore effectively

### Resource Limits
\`\`\`yaml
resources:
  limits:
    memory: "512Mi"
    cpu: "500m"
  requests:
    memory: "256Mi"
    cpu: "250m"
\`\`\`

## Security Scanning
- Use tools like Trivy or Snyk
- Implement automated vulnerability scanning
- Regular base image updates

This approach to container optimization ensures your applications are production-ready, secure, and performant.
      `,
      category: "docker",
      tags: ["docker", "containers", "security", "optimization", "devops"],
      author: "Vaibhav Soni",
      date: "Jan 05, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "GitHub Actions CI/CD Pipeline: From Code to Production",
      excerpt: "Build a complete CI/CD pipeline using GitHub Actions for automated testing, building, and deployment to production environments.",
      content: `
# GitHub Actions CI/CD Pipeline

## Pipeline Overview
A complete CI/CD pipeline that handles:
- Code quality checks
- Automated testing
- Docker image building
- Multi-environment deployment

## Workflow Configuration

### 1. Trigger Events
\`\`\`yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
\`\`\`

### 2. Build and Test
\`\`\`yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
\`\`\`

### 3. Docker Build
\`\`\`yaml
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build Docker image
        run: docker build -t app:latest .
\`\`\`

### 4. Deployment
\`\`\`yaml
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: kubectl apply -f k8s/
\`\`\`

## Security Best Practices
- Use secrets for sensitive data
- Implement OIDC for cloud authentication
- Scan for vulnerabilities

This CI/CD approach ensures reliable, fast, and secure software delivery.
      `,
      category: "cicd",
      tags: ["github-actions", "cicd", "automation", "deployment"],
      author: "Vaibhav Soni",
      date: "Dec 28, 2023",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Monitoring Stack: Prometheus, Grafana & Setup",
      excerpt: "Complete guide to setting up a production-ready monitoring stack with Prometheus, Grafana, and Alertmanager.",
      content: `
# Complete Monitoring Stack Setup

## Architecture Overview
A comprehensive monitoring solution including:
- **Prometheus**: Metrics collection and storage
- **Grafana**: Visualization and dashboards
- **Alertmanager**: Alert routing and management
- **Node Exporter**: System metrics

## Prometheus Configuration

### 1. Prometheus Config
\`\`\`yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']
\`\`\`

### 2. Alert Rules
\`\`\`yaml
groups:
  - name: system
    rules:
      - alert: HighCPUUsage
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) > 80
        for: 2m
        labels:
          severity: warning
\`\`\`

## Grafana Dashboards
- System overview dashboard
- Application metrics
- Custom business metrics
- Alert status panels

## Alertmanager Setup
\`\`\`yaml
route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'

recevers:
  - name: 'web.hook'
    slack_configs:
      - api_url: 'YOUR_SLACK_WEBHOOK'
\`\`\`

This monitoring approach ensures you have complete visibility into your systems' health and performance.
      `,
      category: "monitoring",
      tags: ["prometheus", "grafana", "monitoring", "observability"],
      author: "Vaibhav Soni",
      date: "Dec 20, 2023",
      readTime: "15 min read"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'terraform', name: 'Terraform' },
    { id: 'kubernetes', name: 'Kubernetes' },
    { id: 'docker', name: 'Docker' },
    { id: 'cicd', name: 'CI/CD' },
    { id: 'monitoring', name: 'Monitoring' }
  ];

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (selectedCategory !== 'all') {
      posts = posts.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      posts = posts.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return posts;
  }, [selectedCategory, searchTerm]);

  if (selectedPost) {
    return (
      <div className="flex flex-col h-full overflow-hidden bg-[#1e1e2e] text-gray-100 font-sans">
        <div className="bg-[#111119] border-b border-white/5 py-3 px-6 shadow-sm sticky top-0 z-10 flex items-center">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-lg leading-none">←</span> Back to Archives
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4 leading-tight">{selectedPost.title}</h1>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-10 pb-6 border-b border-white/5">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span className="uppercase text-indigo-400">{selectedPost.category}</span>
            </div>
            
            <div 
              className="prose prose-invert prose-indigo max-w-none text-gray-300 text-[15px] leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: selectedPost.content
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-5">$1</h2>')
                  .replace(/^# (.+)$/gm, '')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/```[\w]*\n?([\s\S]*?)```/g, '<pre class="bg-[#111119] p-4 rounded-xl border border-white/5 overflow-x-auto my-6 text-sm text-indigo-300"><code>$1</code></pre>')
                  .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc mb-2">$1</li>')
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#1e1e2e] text-gray-100 font-sans">
      {/* Blog App Header */}
      <div className="bg-[#111119] border-b border-white/5 px-6 py-4 space-y-4 sticky top-0 z-10 shadow-sm">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-[#1e1e2e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-indigo-500 outline-none transition-all placeholder-gray-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow shadow-blue-500/30"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredPosts.map(post => (
            <button 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="text-left bg-[#2b2b3b] border border-white/5 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-xl hover:bg-[#323246] transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                <span className="text-blue-400">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight mb-3">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mt-auto">
                {post.excerpt}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
