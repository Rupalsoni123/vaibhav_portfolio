const blogPosts = [
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
  },
  {
    id: 3,
    title: "Pinning a VoIP server: when docker commit beats a Dockerfile",
    slug: "voip-docker-commit-image",
    excerpt:
      "Client needed an exact-version VoIP calling server. The clean Dockerfile path lost — runtime state forced a different approach.",
    content: `# Pinning a VoIP server: when docker commit beats a Dockerfile

## Context
HighSky client engagement. VoIP calling server. The client had a specific version that worked. Newer versions broke their dialplan. Couldn't change the version, couldn't change the dialplan.

## What "build from Dockerfile" couldn't do
The exact version of the VoIP server we needed was pinned by a runtime configuration that gets baked in after a one-time interactive setup. Running that setup on every CI rebuild meant:
- Non-deterministic config
- Risk of the build host's package mirror serving a slightly newer minor

## The pragmatic path
- Stand up the exact VoIP server version once on a clean Debian base.
- Run the interactive config until the dialplan worked.
- \`docker commit\` the running container into an image.
- Tag and push to the client's registry.
- Document the recreation steps separately so the recipe wasn't lost.

## Trade-off
\`docker commit\` is the dirty cousin of \`docker build\` — image isn't reproducible from source alone, and you need the recreation doc to be the source of truth. We accepted that explicitly.

## Lesson
"Reproducible from a Dockerfile" is the right north star, not the only star. When a vendor's app expects state at runtime, \`docker commit\` + a written runbook is sometimes the honest answer.
`,
    category: "containers",
    tags: ["docker", "voip", "pragmatism"],
    author: "Vaibhav Soni",
    featured: true,
    readTime: "5 min read",
    publishDate: "2023-11-04"
  },
  {
    id: 4,
    title: "Deploying AI PoCs: what an infra engineer actually owns",
    slug: "ai-poc-infra-ownership",
    excerpt:
      "Scope contract for deploying AI proof-of-concepts when you don't own the model. Jenkins, Sonar gates, Nginx, TLS, and where the line is.",
    content: `# Deploying AI PoCs: what an infra engineer actually owns

## Why scope clarity matters
"AI engineer" and "DevOps who deploys AI" are different jobs. Conflating them on a resume burns trust. Conflating them on the team burns weekends. The cleanest contract I've used:

> Application + model behavior → ML/dev team.
> Pipeline + runtime + ingress + TLS → infra (me).

## What the infra-side deploy looks like
Across multiple AI PoCs I deployed (role: deployment + infra only), the recipe was essentially the same:

1. **Jenkins pipeline** per PoC repo. Conditional stages for monorepo FE/BE.
2. **SonarQube quality gate** as a hard stage. Fails the pipeline if blockers exist.
3. **Automated test stage** — if tests fail, build does not progress.
4. **Docker image build** with pinned base + multi-stage trim.
5. **Nginx reverse proxy** with route-based proxy_pass to the app container.
6. **TLS via Certbot** (Let's Encrypt) with auto-renewal hook.
7. **Environment promotion** Dev → Staging → Prod with separate Jenkins jobs.

## What I do NOT claim
- I did not choose the model.
- I did not write prompts or agents.
- I did not evaluate model output quality.
- I did not handle training data.

Saying that explicitly costs nothing and pays off the first time a hiring manager asks a sharp question.

## Wins worth claiming
- Reproducible deploys across PoC count.
- TLS auto-renews; nobody has paged me about a cert.
- Pipelines block bad merges via Sonar + tests rather than human review alone.
- Each PoC's runbook is short enough to fit on one screen.

## Closing
If you're applying for SRE/DevOps roles after AI-adjacent deploys: list the verb you actually did. Hiring teams can tell the difference, and the ones that can't aren't the ones you want.
`,
    category: "ci-cd",
    tags: ["jenkins", "ci-cd", "ai-deployment", "scope"],
    author: "Vaibhav Soni",
    featured: true,
    readTime: "6 min read",
    publishDate: "2026-04-18"
  }
];

export { blogPosts };
