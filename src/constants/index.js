import project1 from "../assets/projects/Ascend.png";
import project2 from "../assets/projects/chatTime.png";


export const HERO_CONTENT = `I am a passionate Computer Science student at IIT Jammu with a strong foundation in full stack development and a keen interest in artificial intelligence and machine learning. With hands-on experience in developing and managing web applications, I strive to leverage my skills to solve real-world problems and create impactful solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer currently pursuing a B.Tech in Computer Science at IIT Jammu. With a CGPA of 8.29 and a strong academic background, I have honed my skills in various technologies including HTML, CSS, JavaScript, React, Node.js, Express.js and MongoDB. My curiosity for technology drives me to continuously learn and adapt, tackling new challenges with enthusiasm. Outside of academics, I enjoy staying active with sports like volleyball and badminton, and I am actively involved in various extracurricular activities and competitions.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Research Intern",
    company: "City, University of London",
    description: `Researched and analyzed C2PA implementations for deepfake detection. Implemented C2PA metadata to images for testing and comparison. Utilized various methods to identify false images using deepfake tools. Demonstrated methods for incorporating data into C2PA metadata, including watermarking and external repositories.`,
    technologies: ["C2PA", "Deepfake Detection", "Image Processing", "Metadata"],
  },
  {
    year: "Apr 2024 - May 2024",
    role: "Web Development Intern",
    company: "Suvidha Mahila Mandal",
    description: `Collaborated with the Suvidha Foundation NGO team to revamp their website. Engineered the website using HTML, CSS, JavaScript, Bootstrap, and React. Designed a visually engaging and user-friendly interface. Implemented SEO best practices to improve online visibility.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Ascend",
    image: project1,
    description:
      "Developed a customized test platform to assess various skills. Implemented personalized roadmaps for user upskilling and integrated ML models to recommend relevant articles based on user's scores. Designed a business plan and go-to-market strategy.",
    technologies: ["React", "Node.js", "Javascript", "MongoDB", "Express.Js", "Tensor Flow"],
  },
  {
    title: "Chat Time",
    image: project2,
    description:
      "Developed a Chat Application using the MERN stack. Implemented one-on-one and group chat functionalities using WebSockets and incorporated an AI-assisted chatbot to enhance user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js",  "Socket.io"],
  },
];

export const SKILLS = {
  programmingLanguages: ["C++", "Python"],
  webDevelopment: ["HTML", "CSS", "JavaScript", "Bootstrap", "React JS", "Node JS", "MongoDB", "Express JS"],
  softwares: ["Git", "Onshape", "MySQL", "PowerPoint"],
  relevantCoursework: ["Data Structures & Algorithms", "Database Management Systems", "Computer Networks", "Machine Learning", "Computer Architecture", "High Performance Computer Systems"],
};

export const CERTIFICATIONS = [
  {
    title: "The Complete 2023 Web Development Bootcamp",
    provider: "Udemy",
  },
];

export const ADDITIONAL_DETAILS = {
  achievements: [
    "Solved over 300 problems on Leetcode and GFG combined."
  ],
  positionsOfResponsibility: [
    "Representative of Career and Development Services, IIT Jammu",
    "Head of Content and Design Team in Career and Development Services, IIT Jammu"
  ],
  extracurricularActivities: [
    "Participated in the 55th Inter IIT Sports Meet and qualified for pre-quarter finals.",
    "Participated in Inter IIT Tech Meet 12.0",
    "Participated in various case study competitions like RED BRICK by IIM Ahmedabad, Be the CXO.",
    "Hosted Case Study Competition StrategiQ and Pan India stock market trading competition StockGro.",
    "Volunteered in Technunctus-22, 23 and Renao-23."
  ],
  hobbies: ["Volleyball", "Badminton", "Gym"],
  languages: ["English", "Hindi", "Telugu"],
};

export const CONTACT = {
  address: "Andhra Pradesh, India",
  phoneNo: "+91 8309507120",
  email: "2021ucs0099@iitjammu.ac.in",
};
