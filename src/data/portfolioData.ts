export const portfolioData = {
  personal: {
    name: "Deepti Sharma",
    title: "Software Development Engineer",
    email: "deepti21aug@gmail.com",
    phone: "+91 9455003671",
    location: "Uttar Pradesh, India",
    summary: "Just a dev who loves good design, better code, and building real stuff. 2 years in the frontend game — ReactJs, Nextjs, TypeScript, JavaScript, Ant Design,and MUI. Now adding AI to the mix."
  },
  
  skills: {
    technical: [
      { name: "React", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Language" },
      { name: "JavaScript", level: 90, category: "Language" },
      { name: "HTML/CSS", level: 88, category: "Frontend" },
      { name: "Redux", level: 85, category: "Frontend" },
      { name: "Node.js", level: 70, category: "Backend" },
      { name: "Express.js", level: 70, category: "Backend" },
      { name: "MySQL", level: 55, category: "Database" },
      { name: "MongoDB", level: 70, category: "Database" },
      { name: "Git", level: 85, category: "Tools" },
       { name: "PostMan", level: 80, category: "Tools" },
        { name: "Jira", level: 85, category: "Tools" },
      { name: "C++", level: 75, category: "Language" }
    ]
  },
  
  experience: [
    {
      company: "Innobit Systems",
      position: "Software Development Engineer",
      duration: "June 2024 - Present",
      location: "",
      achievements: [
        "Developed and maintained scalable SAAS platforms using React, TypeScript, and Redux",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and contributed to code reviews",
        "Implemented responsive UI components and optimized application performance",
        "Participated in agile development processes and sprint planning",
        "Refactored a Next.js codebase with lazy loading and code-splitting, cutting load time by 70% "
      ]
    },
    {
      company: "Innobit Systems",
      position: "Frontend Developer Trainee",
      duration: "Oct 2023 - June 2024",
      location: "",
      achievements: [
        "Built custom web applications for various clients using modern technologies",
        "Delivered projects on time while maintaining high code quality standards",
        "Worked with clients to understand requirements and provide technical solutions"
      ]
    }
  ],
  
  projects: [
    {
      title: "Hyperdash",
      description: "A scalable SaaS platform built to streamline city operations through smart workflows for ticket tracking, resource scheduling, and task automation. The platform improves operational efficiency and reduces manual intervention through intelligent automation and interactive dashboards.",
      technologies: ["React", "Redux Toolkit", "Ant Design", "Leaflet.js", "Typescript"],
      image: "public/assets/Smart-Cities.jpg",
      github: "https://github.com/deepti21aug/ecommerce-platform",
      live: "https://ecommerce-demo.netlify.app",
      featured: true,
      client: true,
    },
    {
      title: "AfterMarket",
      description: "A collaborative SAAS E-commerce application with real-time updates,multitenancy funcionality drag-and-drop functionality, and team collaboration features.",
      technologies: ["NextJs", "TypeScript", "Redux Toolkit", "Material UI"],
      image: "public/assets/E-commerce.jpg",
      github: "https://github.com/deepti21aug/task-manager",
      live: "https://task-manager-demo.netlify.app",
      featured: true,
      client:true,
    },
    {
      title: "Chatterbox",
      description: "Built a scalable real-time messaging app using Socket.io and Express, implementing encrypted JWT-based  authentication and efficient MongoDB  schemas,  added features like view-once images, and profile editing",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB","Express.js", "Nodejs"],
      image: "public/assets/image.png",
      github: "https://github.com/sharma21deepti/chatterbox",
      live: "",
      featured: true
    },
    {
      title: "Snake Game",
      description: "A simple snake game.",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "public/assets/flappybird.png",
      github: "https://github.com/sharma21deepti/Snake-Game",
      live: "https://sharma21deepti.github.io/Snake-Game/",
      featured: false
    },
   
    {
      title: "ToDO App",
      description: "",
      technologies: ["HTML", "CSS", "Javascript","Python"],
      image: "public/assets/Todo.png",
      github: "https://github.com/sharma21deepti/TODO-App",
      live: "https://sharma21deepti.github.io/TODO-App/",
      featured: false
    },
    {
      title: "QR Code Generator",
      description: "A QR generator that generates QR of any text/url",
      technologies: ["HTML", "CSS", "Javascript"],
      image: "public/assets/QR.jpeg",
      github: "https://github.com/sharma21deepti/TODO-App",
      live: "https://sharma21deepti.github.io/TODO-App/",
      featured: false
    }
  ],
  
  education: {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    duration: "2018 - 2022",
    cgpa: "8.4/10"
  },
  
  contact: {
    email: "deepti21aug@gmail.com",
    phone: "+91 9711546645",
    linkedin: "https://www.linkedin.com/in/deepti-sharma-93a5151a0",
    github: "https://github.com/sharma21deepti",
    leetcode: "https://leetcode.com/u/deepti21aug/"
  }
};