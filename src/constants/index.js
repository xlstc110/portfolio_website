//Actually developer profile setting, modify this file to fit personal develop experience.
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    spring,
    angular,
    java,
    reactjs,
    kafka,
    postgresql,
    nodejs,
    mongodb,
    jenkins,
    revature,
    techsur,
    infosys,
    carrent,
    jobit,
    tripguide,
    aws,
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "API Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Dev Ops",
      icon: mobile,
    },
    {
      title: "System Enhancement",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SpringBoot",
      icon: spring,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company_name: "TechSur Solutions",
      icon: techsur,
      iconBg: "#383E56",
      date: "January 2024 - February 2024",
      points: [
        "- Designed, developed, and maintained scalable full-stack web applications, supporting production-level workloads.",
        "- Built and improved 10+ RESTful API features using Java 17 in Spring Boot 3, resulting in more proficient and secured API respond.",
        "- Built and improved 10+ UI components using Angular 17 in TypeScript 5, resulting in a more engaging user experience.",
        "- Developed Selenium scripts in Java to validate user interface components; created JMeter tests for API performance assessment.",
        "- Collaborated with cross-functional team members to analyze and fix issues based on incidents reported by users through an internal application.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#383E56",
      date: "July 2021 - August 2023",
      points: [
        "-Developed responsive components using JavaScript with React and Java with Spring Boot, following SDLC and Agile workflow.",
        "-Monitored website performance using Quantum Metric, Okta, and Azure, ensuring optimal user experience and addressing performance bottlenecks.",
        "-Collaborated with cross-functional teams to analyze and prioritize monthly tickets from Jira, providing solution approaches and ensuring delivery of website enhancements.",
        "-Leveraged GitHub, and Jenkins for version control, code reviews, and continuous integration and deployment.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Revature",
      icon: revature,
      iconBg: "#E6DEDD",
      date: "March 2021 - July 2021",
      points: [
        "-Developed and maintained RESTful APIs using Spring Boot in Java to serve data to the Angular front-end application.",
        "-Utilized AWS services such as EC2 for application deployment, S3 for static file storage, and RDS for database management.",
        "-Deployed a Request Gateway and Load Balancer using Docker and Kubernetes HPA, improving traffic scaling and routing.",
        "-Secured APIs using OAuth 2.0 with KeyCloak and Spring Security for robust authentication and authorization.",
        "-Utilized event-driven architecture with Kafka to enable asynchronous processing and improve system scalability.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Robbie is a 'whatever it takes' person, he is willing to learn and work until his goal is accomplished.",
      name: "Kun Lin",
      designation: "Software Engineer",
      company: "Oracle",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Robbie is unafraid of failure, viewing each setback as a learning opportunity on his journey to success.",
      name: "Kolung",
      designation: "Software Engineer",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Chris",
      designation: "Software Engineer",
      company: "TechSur Solution",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shopping Site",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "OAuth",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { navLinks, services, technologies, experiences, testimonials, projects };