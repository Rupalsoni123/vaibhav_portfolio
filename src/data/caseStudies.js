const caseStudies = [
  {
    slug: "k8s-kafka-zookeeper-do",
    title: "Kubernetes cluster for Kafka + ZooKeeper on DigitalOcean",
    org: "HighSky",
    role: "DevOps engineer",
    duration: "Feb 2023 – Feb 2024",
    stack: ["Kubernetes", "DigitalOcean", "Apache Kafka", "ZooKeeper", "StatefulSets", "Helm", "Prometheus"],
    metrics: [
      { label: "messaging stack", value: "Kafka+ZK", tone: "ok" },
      { label: "environments", value: "prod", tone: "ok" },
      { label: "deploy pattern", value: "StatefulSets", tone: "ok" },
    ],
    problem:
      "Client needed a self-managed distributed messaging stack on Kubernetes for an asynchronous workload. Requirements included persistent storage, predictable pod identity (Kafka brokers and ZooKeeper nodes), and the ability to scale brokers without losing data.",
    decisions: [
      "Chose DigitalOcean Kubernetes (DOKS) over self-managed kubeadm — less node ops, fits team size.",
      "Used StatefulSets for both Kafka and ZooKeeper to get stable pod identities and per-pod persistent volumes.",
      "Block-storage PVCs sized for retention windows; storage class with retain reclaim policy so PVs survive accidental pod deletion.",
      "Helm chart for installation (Bitnami's chart as the starting point, then patched for our resource limits and replicas).",
      "Network policies to restrict broker traffic to producers/consumers inside the cluster.",
    ],
    mermaid: `flowchart LR
  Producer[Producer apps] -->|publish| Brokers[(Kafka brokers · StatefulSet)]
  Brokers <-->|coord| ZK[(ZooKeeper ensemble · StatefulSet)]
  Brokers -->|metrics| Prom[Prometheus]
  Prom --> Grafana
  Brokers --> PVC[(PersistentVolumes · Block Storage)]
  ZK --> PVCz[(PersistentVolumes · Block Storage)]`,
    architecture: `
[Producers] → [Kafka brokers (StatefulSet)] ↔ [ZooKeeper (StatefulSet)]
                ↓                                ↓
        [Block-storage PVCs]            [Block-storage PVCs]
                ↓
        [Prometheus → Grafana]
`,
    outcome: [
      "Production-ready messaging cluster delivered on Kubernetes — replacing what would have been a hand-managed VM fleet.",
      "StatefulSet identity + persistent volumes meant broker restarts and node moves did not require manual data recovery.",
      "Operational handover: documented runbooks for scaling brokers, restoring volumes, and rolling controller upgrades.",
    ],
    lessons: [
      "Block-storage IOPS planning matters more than CPU for Kafka — undersized PVs hurt p99 well before brokers themselves were stressed.",
      "ZooKeeper ensemble size and quorum rules are easy to get wrong on first try; 3-node ensembles are the realistic minimum for production.",
      "Charts get you 70% there. The remaining 30% (resource limits, anti-affinity, ingress) is where the time goes — budget for it.",
    ],
  },
];

export default caseStudies;
