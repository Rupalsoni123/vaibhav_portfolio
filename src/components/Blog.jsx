import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTransition, StaggerContainer, StaggerItem } from './ui/PageTransition';
import { useAnalytics } from './ui/Analytics';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const { trackEvent } = useAnalytics();

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
      featured: true,
      date: "2024-01-15",
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
      featured: true,
      date: "2024-01-10",
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
      featured: false,
      date: "2024-01-05",
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
      tags: ["github-actions", "cicd", "automation", "deployment", "devops"],
      author: "Vaibhav Soni",
      featured: false,
      date: "2023-12-28",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Monitoring Stack: Prometheus, Grafana & Alertmanager Setup",
      excerpt: "Complete guide to setting up a production-ready monitoring stack with Prometheus, Grafana, and Alertmanager for comprehensive observability.",
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

receivers:
  - name: 'web.hook'
    slack_configs:
      - api_url: 'YOUR_SLACK_WEBHOOK'
\`\`\`

This monitoring approach ensures you have complete visibility into your systems' health and performance.
      `,
      category: "monitoring",
      tags: ["prometheus", "grafana", "monitoring", "observability", "alerting"],
      author: "Vaibhav Soni",
      featured: false,
      date: "2023-12-20",
      readTime: "15 min read"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'terraform', name: 'Terraform', count: blogPosts.filter(post => post.category === 'terraform').length },
    { id: 'kubernetes', name: 'Kubernetes', count: blogPosts.filter(post => post.category === 'kubernetes').length },
    { id: 'docker', name: 'Docker', count: blogPosts.filter(post => post.category === 'docker').length },
    { id: 'cicd', name: 'CI/CD', count: blogPosts.filter(post => post.category === 'cicd').length },
    { id: 'monitoring', name: 'Monitoring', count: blogPosts.filter(post => post.category === 'monitoring').length }
  ];

  useEffect(() => {
    let filtered = [...blogPosts];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    trackEvent('blog_post_view', 'blog', post.title);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    trackEvent('blog_category_filter', 'blog', categoryId);
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = selectedCategory === 'all' 
    ? filteredPosts.filter(post => !post.featured)
    : filteredPosts;

  // Blog Detail View
  if (selectedPost) {
    return (
      <section id="blog" className="section" style={{
        background: 'var(--bg-secondary)',
        padding: '5rem 0',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          >
            {/* Article Header */}
            <header className="px-8 pt-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full">
                  {selectedPost.category.toUpperCase()}
                  {selectedPost.featured && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        FEATURED
                      </span>
                    </>
                  )}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {selectedPost.author}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {selectedPost.readTime}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {selectedPost.date}
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="px-8 py-8">
              <style>{`
                .blog-content h1 {
                  font-size: 2.25rem !important;
                  font-weight: 800 !important;
                  margin: 3rem 0 2rem 0 !important;
                  color: var(--text-primary) !important;
                  line-height: 1.1 !important;
                }
                .blog-content h2 {
                  font-size: 1.875rem !important;
                  font-weight: 700 !important;
                  margin: 3rem 0 1.5rem 0 !important;
                  color: var(--text-primary) !important;
                  line-height: 1.2 !important;
                }
                .blog-content h3 {
                  font-size: 1.5rem !important;
                  font-weight: 700 !important;
                  margin: 2.5rem 0 1rem 0 !important;
                  color: var(--text-primary) !important;
                  line-height: 1.3 !important;
                }
                .blog-content p {
                  margin: 1.5rem 0 !important;
                  line-height: 1.7 !important;
                  color: var(--text-primary) !important;
                }
                .blog-content strong {
                  font-weight: 600 !important;
                  color: var(--text-primary) !important;
                }
                .blog-content em {
                  font-style: italic !important;
                  color: var(--text-secondary) !important;
                }
                .blog-content code {
                  background: #f1f5f9 !important;
                  padding: 0.25rem 0.5rem !important;
                  border-radius: 6px !important;
                  font-size: 0.9em !important;
                  font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace !important;
                  color: #3b82f6 !important;
                  border: 1px solid #e2e8f0 !important;
                }
                .blog-content pre {
                  background: #f8f9fa !important;
                  padding: 1.5rem !important;
                  border-radius: 12px !important;
                  overflow-x: auto !important;
                  border: 1px solid #e5e7eb !important;
                  font-size: 14px !important;
                  margin: 2rem 0 !important;
                }
                .blog-content pre code {
                  background: transparent !important;
                  padding: 0 !important;
                  border: none !important;
                  color: var(--text-primary) !important;
                  font-size: 14px !important;
                }
                .blog-content ul, .blog-content ol {
                  margin: 1.5rem 0 !important;
                  padding-left: 2rem !important;
                }
                .blog-content li {
                  margin: 0.5rem 0 !important;
                  line-height: 1.7 !important;
                }
                .dark .blog-content code {
                  background: #374151 !important;
                  border-color: #4b5563 !important;
                  color: #60a5fa !important;
                }
                .dark .blog-content pre {
                  background: #1f2937 !important;
                  border-color: #374151 !important;
                }
              `}</style>
              
              <div 
                className="blog-content"
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px',
                  color: 'var(--text-primary)'
                }}
                dangerouslySetInnerHTML={{ 
                  __html: selectedPost.content
                    // Clean and normalize content
                    .trim()
                    // Convert headers with proper regex
                    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
                    // Convert bold and italic
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
                    // Convert code blocks
                    .replace(/```[\w]*\n?([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                    // Convert inline code
                    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
                    // Convert lists
                    .replace(/^- (.+)$/gm, '<li>$1</li>')
                    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
                    // Wrap consecutive list items in ul tags
                    .replace(/(<li>.*<\/li>\s*)+/g, '<ul>$&</ul>')
                    // Convert paragraphs
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>')
                    // Clean up
                    .replace(/<p><\/p>/g, '')
                    .replace(/<p>(<h[1-6]>)/g, '$1')
                    .replace(/(<\/h[1-6]>)<\/p>/g, '$1')
                    .replace(/<p>(<ul>)/g, '$1')
                    .replace(/(<\/ul>)<\/p>/g, '$1')
                    .replace(/<p>(<pre>)/g, '$1')
                    .replace(/(<\/pre>)<\/p>/g, '$1')
                    // Convert remaining line breaks
                    .replace(/\n/g, '<br>')
                }} 
              />
            </div>

            {/* Article Footer */}
            <footer className="px-8 pb-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleBackToList}
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </button>
            </footer>
          </motion.article>
        </div>
      </section>
    );
  }

  // Blog List View
  return (
    <section id="blog" className="section" style={{
      background: 'var(--bg-secondary)',
      padding: '5rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <SectionTransition>
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              DevOps Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights, tutorials, and real-world experiences from my DevOps journey. 
              Learn about Terraform, Kubernetes, Docker, CI/CD, and more.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && featuredPosts.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Featured Posts</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handlePostClick(post)}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readTime}
                        </span>
                        <span className="text-blue-500 text-sm font-medium">
                          Read Full Article →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {regularPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <motion.article
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
                    onClick={() => handlePostClick(post)}
                    whileHover={{ y: -5 }}
                    layout
                  >
                    <div className="p-5 flex flex-col h-full">
                      <div className="mb-3">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {post.category.toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readTime}
                        </span>
                        <span className="text-blue-500 text-sm font-medium">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </AnimatePresence>
          </StaggerContainer>
        </SectionTransition>
      </div>
    </section>
  );
};

export default Blog;
