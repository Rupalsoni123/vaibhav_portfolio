import ReactJs, { Bash, Bootstrap, C, Canva, CPlusPlus, CSS, Docker, ExpressJS, FireBase, Git, GitHub, Bitbucket, AzureIcon, Heroku, HTML, Java, JQuery, Prometheus, JS, Kotlin, Kubernetes, TerragruntLogo, MaterialUI, MongoDB, MySQL, NextJs, NodeJS, PHP, PostGreSql, PostMan, Python, Redux, TailwindCSS, TS, VSCode, Redis, AWS, Ansible, Kafka, DBeaver, GithubActions, Gitlab, Grafana, Jira, Serverless, Nginx, RabbitMQ, SonarQube, Terraform, Jenkins } from "../components/SkillIcons";

const skills = [
    {
        id: 1,
        icon: <AWS />,
        name: "AWS",
        category: "Cloud Platforms",
        level: 95,
        style: {
            shadow: "shadow-[#FF9902]",
            cover: "from-black to-[#FF9902] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 2,
        icon: <AzureIcon />,
        name: "Azure",
        category: "Cloud Platforms",
        level: 80,
        style: {
            shadow: "shadow-[#0078D4]",
            cover: "from-black to-[#0078D4] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 3,
        icon: <Terraform />,
        name: "Terraform",
        category: "DevOps Tools",
        level: 90,
        style: {
            shadow: "shadow-[#5C4EE5]",
            cover: "from-black to-[#5C4EE5] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 4,
        icon: <TerragruntLogo />,
        name: "Terragrunt",
        category: "DevOps Tools",
        level: 85,
        style: {
            shadow: "shadow-[#5C4EE5]",
            cover: "from-black to-[#5C4EE5] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 5,
        icon: <Docker />,
        name: "Docker",
        category: "DevOps Tools",
        level: 92,
        style: {
            shadow: "shadow-[#0db7ed]",
            cover: "from-black to-[#0db7ed] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 6,
        icon: <Kubernetes />,
        name: "Kubernetes",
        category: "DevOps Tools",
        level: 85,
        style: {
            shadow: "shadow-[#326ce5]",
            cover: "from-black to-[#326ce5] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 7,
        icon: <Jenkins />,
        name: "Jenkins",
        category: "DevOps Tools",
        level: 80,
        style: {
            shadow: "shadow-[#D33833]",
            cover: "from-black to-[#D33833] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 8,
        icon: <Ansible />,
        name: "Ansible",
        category: "DevOps Tools",
        level: 75,
        style: {
            shadow: "shadow-[#EE0000]",
            cover: "from-black to-[#EE0000] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 9,
        icon: <GithubActions />,
        name: "GitHub Actions",
        category: "DevOps Tools",
        level: 88,
        style: {
            shadow: "shadow-[#2088FF]",
            cover: "from-black to-[#2088FF] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 10,
        icon: <Gitlab />,
        name: "GitLab CI/CD",
        category: "DevOps Tools",
        level: 82,
        style: {
            shadow: "shadow-[#FC6D26]",
            cover: "from-black to-[#FC6D26] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 11,
        icon: <Bitbucket />,
        name: "Bitbucket",
        category: "DevOps Tools",
        level: 78,
        style: {
            shadow: "shadow-[#0052CC]",
            cover: "from-black to-[#0052CC] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 12,
        icon: <Prometheus />,
        name: "Prometheus",
        category: "Monitoring",
        level: 85,
        style: {
            shadow: "shadow-[#E6522C]",
            cover: "from-black to-[#E6522C] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 13,
        icon: <Grafana />,
        name: "Grafana",
        category: "Monitoring",
        level: 80,
        style: {
            shadow: "shadow-[#F46800]",
            cover: "from-black to-[#F46800] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 15,
        icon: <Bash />,
        name: "Bash",
        category: "Programming",
        level: 90,
        style: {
            shadow: "shadow-[#4EAA25]",
            cover: "from-black to-[#4EAA25] rounded-b-md",
            opacity: "opacity-80"
        }
    }, 
    {
        id: 18,
        icon: <MySQL />,
        name: "MySQL",
        category: "Databases",
        level: 85,
        style: {
            shadow: "shadow-[#4479A1]",
            cover: "from-black to-[#4479A1] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 19,
        icon: <PostGreSql />,
        name: "PostgreSQL",
        category: "Databases",
        level: 80,
        style: {
            shadow: "shadow-[#336791]",
            cover: "from-black to-[#336791] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 20,
        icon: <MongoDB />,
        name: "MongoDB",
        category: "Databases",
        level: 75,
        style: {
            shadow: "shadow-[#47A248]",
            cover: "from-black to-[#47A248] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 21,
        icon: <Redis />,
        name: "Redis",
        category: "Databases",
        level: 70,
        style: {
            shadow: "shadow-[#DC382D]",
            cover: "from-black to-[#DC382D] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 22,
        icon: <Git />,
        name: "Git",
        category: "DevOps Tools",
        level: 95,
        style: {
            shadow: "shadow-[#F34F29]",
            cover: "from-black to-[#F34F29] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 23,
        icon: <GitHub />,
        name: "GitHub",
        category: "DevOps Tools",
        level: 90,
        style: {
            shadow: "shadow-[#181717]",
            cover: "from-black to-[#181717] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 24,
        icon: <Nginx />,
        name: "Nginx",
        category: "DevOps Tools",
        level: 75,
        style: {
            shadow: "shadow-[#009639]",
            cover: "from-black to-[#009639] rounded-b-md",
            opacity: "opacity-80"
        }
    }
];

export default skills;
