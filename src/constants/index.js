import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Macro & Me",
    image: project1,
    description:
      "A dynamic full-stack web app allowing users to input food items by images or text and retrieve nutritional values using the USDA API and ChatGPT for data sorting.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Python"],
    url: "https://github.com/Nguyen-Noah/macro-and-me"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A modern and responsive portfolio website showcasing projects, skills, and experience. Built with Tailwind CSS for styling, Vite for fast builds, and Framer Motion for interactive animations.",
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion", "JavaScript"],
    url: "https://react-portfolio-seven-rho.vercel.app/"
  },
  {
    title: "Global Game Jam 2024",
    image: project3,
    description:
      "Collaborated with a team to create a video game within 48 hours using the Unity engine, focusing on gameplay mechanics, UI design, and asset integration.",
    technologies: ["Unity", "C#"],
    url: "https://globalgamejam.org/games/2024/blocky-block-9"
  },
  {
    title: "ASL Gesture Translator",
    image: project4,
    description:
      "An AI-powered application that translates American Sign Language (ASL) gestures into text in real time. Utilizes computer vision and deep learning for accurate hand gesture recognition and translation.",
    technologies: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Streamlit"],
    url: "https://github.com/Pranaav003/ASLMachineLearning"
  },
];


export const CONTACT = {
  address: "Fort Wayne, IN 46825",
  phoneNo: "(260) 710-0895",
  email: "michaelnguyen2203@gmail.com",
  linkedIn: "https://www.linkedin.com/in/michael-nguyen-191338255/",
};

