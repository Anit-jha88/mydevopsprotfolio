export const HERO_CONTENT = "Building scalable, secure, and high-performance applications from code to cloud. Experienced in automating CI/CD pipelines, containerization with Docker, cloud infrastructure management on AWS, and developing robust web applications using  modern technologies.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production-grade reality. My journey began with full-stack development—building web apps with Php , React, and Node.js. Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments. I work across AWS and OCI, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform, Ansible, and CloudFormation. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub, GitLab CI/CD, CodePipeline, and Bash scripting to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 90 },
  { name: 'Azore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 90 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 90 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 90 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg', category: 'infrastructure', level: 90 },
  { name: 'AWS CloudFormation', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg', category: 'infrastructure', level: 90 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 90 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 90 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 90 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'AWS CodePipeline', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodepipeline.svg', category: 'devops', level: 90 },
  { name: 'AWS CodeBuild', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodebuild.svg', category: 'devops', level: 90 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 90 },

  // Development
  
  
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 90 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 90 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg', category: 'development', level: 90 },
  { name: 'Wordpress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', category: 'development', level: 90 },
  { name: 'laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', category: 'development', level: 90 },

  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 90 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 90 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 90 },
];

export const PROJECTS = [
 
   {
    title: 'AI Inventory Tracker on AWS',
    image: 'https://clouddevopslabs.in/assets/p9.png',
    description: 'Deployed an AI Inventory Tracker on AWS using Amazon SageMaker, AWS Lambda, DynamoDB, API Gateway, and SNS to automate inventory monitoring, AI-based demand forecasting, intelligent stock recommendations, and real-time alerts.',
    technologies: ['API Gateway', 'SageMaker', 'DynamoDB', 'AWS Lambda'],
    category: 'aws',
    githubLink: 'https://github.com/Anit-jha88/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },

   {
    title: 'Amazon Clone — EKS & ArgoCD Deployment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a production-grade Amazon Clone on AWS EKS with full GitOps automation via ArgoCD. Integrated CI/CD pipelines using GitHub Actions, containerized microservices with Docker, and managed configuration using Kustomize for seamless auto-sync deployments.',
    technologies: ['AWS EKS', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Kustomize', 'Docker', 'Terraform'],
    category: 'devops',
    githubLink: 'https://github.com/Anit-jha88/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
  {
    title: 'Portfolio Website',
    image: 'https://clouddevopslabs.in/assets/p3.png',
    description: 'Developed a modern and responsive portfolio website using React.js, Tailwind CSS, and Framer Motion. Showcases projects, skills, and case studies with smooth animations, interactive UI components, and optimized performance across all devices.',
    technologies: ['Tailwind CSS', 'React.js', 'React Router Dom', 'Framer Motion'],
    category: 'fullstack',
    githubLink: 'https://github.com/Anit-jha88/mydevopsprotfolio',
    websiteLink: 'https://clouddevopslabs.in/',
  },
    {
    title: 'The Cloud Cost Caluclator',
    image: 'https://clouddevopslabs.in/assets/p7.png',
    description: 'Designed and implemented an AWS Cloud Cost Tracking & Alert System using AWS Lambda, Cost Explorer API, EventBridge, DynamoDB, SNS, and CloudWatch. Automated daily cost collection, generated budget alerts through email notifications, provided service-wise cost analytics, and built a dashboard for monitoring monthly AWS spending.',
    technologies: ['AWS EKS', 'CloudWatch', 'EventBridge', 'AWS Lambda'],
    category: 'aws',
    githubLink: 'https://github.com/Anit-jha88/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
   {
    title: 'Automatic Backup System',
    image: 'https://clouddevopslabs.in/assets/p5.png',
    description: 'Automatic Backup System on AWS to securely back up EC2 instances, EBS volumes, and RDS databases using AWS Backup, Monitored backup jobs with Amazon CloudWatch and configured SNS notifications for backup.',
    technologies: ['AWS EKS', 'CloudWatch', 'EC2', 'AWS Lambda'],
    category: 'aws',
    githubLink: 'https://github.com/Anit-jha88/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
  {
    title: 'WebApp Uptime Monitor',
    image: 'https://clouddevopslabs.in/assets/p6.png',
    description: 'Designed and deployed an AWS-based WebApp Uptime Monitoring solution using CloudWatch, Route 53, SNS, and Lambda to provide 24/7 availability monitoring, real-time alerts, and performance tracking for web applications.',
    technologies: ['AWS Route 53', 'CloudWatch', 'EC2', 'IAM'],
    category: 'aws',
    githubLink: 'https://github.com/Anit-jha88/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
  {
    title: 'Customer Inquiries Manager on AWS',
    image: 'https://clouddevopslabs.in/assets/p8.png',
    description: 'Implemented a serverless Customer Inquiries Manager on AWS using API Gateway, Lambda, DynamoDB, S3, SNS, and Cognito to automate customer inquiry processing, real-time notifications, secure data management, and operational monitoring.',
    technologies: ['Cognito', 'DynamoDB', 'S3', 'AWS Lambda'],
    category: 'aws',
    githubLink: 'https://github.com/Anit-jha88/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
 
  {
    title: 'Next.js CI/CD Pipeline with Docker & Kubernetes',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed and containerized a Next.js application, deploying it to Kubernetes clusters using GitHub Actions for automated CI/CD. Implemented multi-stage Docker builds, health probes, resource limits, and rolling updates for high availability.',
    technologies: ['Next.js', 'Docker', 'Kubernetes', 'GitHub Actions', 'GHCR'],
    category: 'devops',
    githubLink: 'https://github.com/Anit-jha88/nextjs-docker-kubernetes-app',
    websiteLink: '',
  },

  


 
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Automated AWS infrastructure provisioning using Terraform with reusable modules for EC2, VPC, and S3. Integrated CI/CD with GitHub Actions for continuous deployment of cloud environments.',
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'EC2', 'S3'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka',
    websiteLink: '',
  },
  {
    title: 'Airport Transfer Amsterdam',
    image: 'https://clouddevopslabs.in/assets/p1.png',
    description: 'Developed  a taxi booking platform using Google Maps API, enabling users to search pickup and drop-off locations, calculate real-time distances, estimate fares dynamically, and complete online taxi reservations. Utilized PHP, WordPress, JavaScript, and MySQL to build and maintain the application.',
    technologies: ['Wordpress', 'Mysql', 'google Map','javascript'],
    category: 'fullstack',
    githubLink: 'https://github.com/Anit-jha88/Airporttransfer',
    websiteLink: 'https://www.airporttransfer.amsterdam/',
  },
  {
    title: 'Shiksha School ERP',
    image: 'https://clouddevopslabs.in/assets/p2.png',
    description: 'Shiksha School ERP provides an integrated platform for managing students, staff, attendance, fees, examinations, admissions, library, human resources, and financial records. It enables schools to reduce manual paperwork, improve operational efficiency, and maintain accurate records through a centralized dashboard.',
    technologies: ['CodeIgniter', 'MySQL', 'JavaScript', 'HTML5/Css'],
    category: 'fullstack',
    githubLink: 'https://github.com/Anit-jha88/shikshaschoolerp',
    websiteLink: 'https://shikshaschoolerp.co.in/erpdemo/',
  },

   {
    title: 'Multi Vendor Ecommerce Site',
    image: 'https://clouddevopslabs.in/assets/p4.png',
    description: 'Developed a scalable Multi-Vendor eCommerce Platform using React.js, Laravel, and MySQL, enabling multiple sellers to manage products, orders, commissions, and inventory from dedicated vendor dashboards.',
    technologies: ['Laravel/Mysql', 'Strip', 'Docker','AWS'],
    category: 'fullstack',
    githubLink: 'https://github.com/Anit-jha88/laravel-multivender',
    websiteLink: 'https://clouddevopslabs.in/shopx/public',
  },

];

export const CONTACT = {
  address: 'Bengaluru, karnataka, India',
  phoneNo: '+91 8240759287',
  email: 'jhaanit.php@gmail.com',
  social: {
    github: 'https://github.com/Anit-jha88',
    linkedin: 'https://linkedin.com/in/anit-jha',
    twitter: 'https://twitter.com/anitjha',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  aws: PROJECTS.filter(project => project.category === 'aws'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
