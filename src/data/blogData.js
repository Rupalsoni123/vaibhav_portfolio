const blogPosts = [
  {
    id: 1,
    title: "Migrating 240+ Azure Resources to Terraform: A Complete Guide",
    slug: "azure-terraform-migration-guide",
    excerpt: "Learn how I successfully migrated over 240 Azure resources to Infrastructure as Code using Terraform, reducing deployment time by 70%.",
    content: `
# Migrating 240+ Azure Resources to Terraform: A Complete Guide

## The Challenge

When I joined the project, the Azure infrastructure was managed manually through the Azure portal. With over 240 resources across multiple environments, this approach was becoming unsustainable. Manual deployments were error-prone, inconsistent, and time-consuming.

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
- And many more...

### 2. Terraform Module Design
I created reusable, dynamic Terraform modules for each service type:

\`\`\`hcl
# Example: App Service Module
module "app_service" {
  source = "./modules/app-service"
  
  name                = var.app_name
  resource_group_name = var.resource_group_name
  location           = var.location
  app_service_plan_id = var.app_service_plan_id
  
  app_settings = var.app_settings
  
  tags = merge(var.common_tags, {
    Service = "WebApp"
  })
}
\`\`\`

### 3. Standardization
Implemented consistent naming conventions and tagging policies:
- Environment-based naming: \`{env}-{service}-{component}\`
- Mandatory tags: Environment, Owner, CostCenter, Project

## Results

The migration delivered impressive results:
- **70% reduction** in code duplication
- **90% faster** deployments
- **Zero deployment errors** post-migration
- **100% environment consistency**

## Key Learnings

1. **Start with a clear inventory** - Know what you're migrating
2. **Design for reusability** - Create modular, parameterized code
3. **Implement standards early** - Naming and tagging conventions are crucial
4. **Test thoroughly** - Validate in non-production first

## Technologies Used
- Terraform
- Azure Resource Manager
- Azure CLI
- Git for version control

This project transformed our infrastructure management from a manual, error-prone process to a fully automated, version-controlled system.
    `,
    category: "terraform",
    tags: ["terraform", "azure", "iac", "devops", "automation"],
    author: "Vaibhav Soni",
    featured: true,
    readTime: "8 min read",
    publishDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Building Production-Grade Kubernetes Clusters on DigitalOcean",
    slug: "kubernetes-digitalocean-production",
    excerpt: "Step-by-step guide to deploying a highly available Kubernetes cluster with Apache Kafka and ZooKeeper on DigitalOcean.",
    content: `
# Building Production-Grade Kubernetes Clusters on DigitalOcean

## Why DigitalOcean for Kubernetes?

DigitalOcean Kubernetes (DOKS) offers a managed Kubernetes service that's both cost-effective and feature-rich. For this project, I needed to deploy a production-grade cluster capable of running distributed systems like Apache Kafka.

## Architecture Overview

The cluster design focused on:
- **High Availability**: Multi-node setup across availability zones
- **Scalability**: Auto-scaling capabilities
- **Persistence**: Reliable storage for stateful applications
- **Networking**: Secure inter-pod communication

## Implementation Steps

### 1. Cluster Provisioning

\`\`\`bash
# Create the cluster using doctl
doctl kubernetes cluster create production-cluster \\
  --region nyc1 \\
  --version 1.28.2-do.0 \\
  --node-pool "name=worker-pool;size=s-4vcpu-8gb;count=3;auto-scale=true;min-nodes=3;max-nodes=10"
\`\`\`

### 2. Apache Kafka Deployment

Created custom YAML manifests for Kafka deployment:

\`\`\`yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: kafka
spec:
  serviceName: kafka-headless
  replicas: 3
  selector:
    matchLabels:
      app: kafka
  template:
    metadata:
      labels:
        app: kafka
    spec:
      containers:
      - name: kafka
        image: confluentinc/cp-kafka:latest
        ports:
        - containerPort: 9092
        env:
        - name: KAFKA_BROKER_ID
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        volumeMounts:
        - name: kafka-storage
          mountPath: /var/lib/kafka/data
  volumeClaimTemplates:
  - metadata:
      name: kafka-storage
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 100Gi
\`\`\`

### 3. ZooKeeper Configuration

ZooKeeper ensemble for Kafka coordination:

\`\`\`yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: zookeeper
spec:
  serviceName: zookeeper-headless
  replicas: 3
  selector:
    matchLabels:
      app: zookeeper
  template:
    metadata:
      labels:
        app: zookeeper
    spec:
      containers:
      - name: zookeeper
        image: confluentinc/cp-zookeeper:latest
        ports:
        - containerPort: 2181
        env:
        - name: ZOOKEEPER_CLIENT_PORT
          value: "2181"
        - name: ZOOKEEPER_TICK_TIME
          value: "2000"
\`\`\`

## Key Features Implemented

### Persistent Volume Management
- **Dynamic provisioning** using DigitalOcean Block Storage
- **Automatic backup** strategies
- **Storage class optimization** for different workload types

### Networking & Security
- **Network policies** for pod-to-pod communication
- **Ingress controllers** for external access
- **TLS termination** at the load balancer level

### Monitoring & Observability
- **Prometheus** for metrics collection
- **Grafana** for visualization
- **Custom dashboards** for Kafka monitoring

## Performance Results

The deployed cluster achieved:
- **99.9% uptime** over 6 months
- **Sub-second** message processing latency
- **Automatic scaling** during traffic spikes
- **Zero data loss** with proper replication

## Best Practices Learned

1. **Use StatefulSets** for stateful applications like Kafka
2. **Implement proper resource limits** to prevent resource starvation
3. **Plan for persistent storage** from day one
4. **Monitor everything** - metrics are crucial for production systems
5. **Test disaster recovery** procedures regularly

## Technologies Used
- Kubernetes
- DigitalOcean
- Apache Kafka
- ZooKeeper
- Prometheus & Grafana
- Helm for package management

This project demonstrated the power of Kubernetes for running complex, distributed systems in production environments.
    `,
    category: "kubernetes",
    tags: ["kubernetes", "digitalocean", "kafka", "zookeeper", "containers"],
    author: "Vaibhav Soni",
    featured: true,
    readTime: "12 min read",
    publishDate: "2024-01-10"
  }
];

export { blogPosts };
