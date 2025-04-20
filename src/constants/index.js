import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate frontend developer with a focus on building efficient and 
scalable web applications. With 2.9 years of hands-on experience, I have honed my skills in frontend 
technologies like React, JavaScript, TypeScript, Redux and Redux Toolkit. My goal is to leverage my expertise 
to create intuitive user interfaces and deliver seamless user experiences that drive business success.`;

export const ABOUT_TEXT = `I am a dedicated frontend developer with a strong passion for creating 
dynamic and user-friendly web applications. With 2.9 years of professional experience, I have worked 
extensively with React, JavaScript, and TypeScript. My journey in web development began with a curiosity 
for frontend technologies, and it has evolved into a career where I strive to continuously improve my skills. 
I thrive in collaborative environments and am excited about solving problems to deliver high-quality solutions. 
Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Frontend Developer",
    company: "Capgemnini Technology",
    description: `Working as part of a frontend team, I am responsible for building and maintaining 
    user interfaces using React.js, Redux, and other modern web technologies. I collaborate with designers 
    and backend developers to create seamless, user-friendly applications. I also work on improving test coverage 
    for key components and hooks.`,
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "HTML",
      "CSS",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Online Eye Care App",
    description: `Worked collaboratively with a team to build a full-stack web application, using React on the 
    frontend and Spring Boot on the backend. I designed and implemented RESTful APIs to ensure smooth and efficient 
    client-server communication. The user interface was built to be fully responsive, delivering a consistent and 
    intuitive experience across all devices. I also wrote unit tests with JUnit and Jest, achieving over 80% test 
    coverage and contributing to a robust and reliable codebase.`,
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer Intern",
    company: "Tech Innovators",
    description: `Assisted in building responsive web applications using React.js and contributed to 
    developing reusable components and state management. Worked on bug fixes and UI improvements, and 
    collaborated with senior developers to implement best practices in frontend development.`,
    technologies: ["React.js", "HTML", "CSS", "Redux"],
  },
];

export const PROJECTS = [
  {
    title: "Inspire Web Portal",
    image: project1,
    description: `A health management web application for sleep apnea built using React and Redux, with features 
      like report creation, lab test, and progress tracking.`,
    technologies: ["React.js", "JavaScript", "Redux", "Node.js"],
  },
  {
    title: "Personal Portfolio",
    image: project2,
    description:
      "A personal portfolio website showcasing my projects, skills, and experience built using React, HTML, and CSS.",
    technologies: ["React.js", "HTML", "CSS"],
  },
  {
    title: "Weather Dashboard",
    image: project3,
    description:
      "A weather dashboard that fetches and displays weather information based on user input, built with React and integrated with external weather APIs.",
    technologies: ["React.js", "JavaScript", "CSS", "API Integration"],
  },
  {
    title: "Online Eye Care App",
    image: project4,
    description: `An online website for eye care services, built using React.js and Spring Boot, with features 
      like appointment booking and user authentication.`,
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

export const CONTACT = {
  address: "Sangli, Maharashtra, India",
  phoneNo: "+91 8482927915 ",
  email: "rushidhamanage.7@gmail.com.com",
};
