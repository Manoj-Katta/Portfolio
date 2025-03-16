import project1 from "../assets/projects/Ascend.png";
import project2 from "../assets/projects/chatTime.png";
import C2PA_Tool from "../assets/projects/C2PA_Tool.png";
import food_restaurant from "../assets/projects/Food-Restaurant.png";
import Email_Track from "../assets/projects/Email_Track.png";
import Chef_Gemini from "../assets/projects/chef_gemini.png";

export const HERO_CONTENT = `A passionate Computer Science student at IIT Jammu with a strong foundation in full stack development and a keen interest in artificial intelligence and machine learning. With hands-on experience in developing and managing web applications, I strive to leverage my skills to solve real-world problems and create impactful solutions.`;

export const ABOUT_TEXT = `A dedicated and versatile full stack developer currently pursuing a B.Tech in Computer Science at IIT Jammu. With a CGPA of 8.29 and a strong academic background, I have honed my skills in various technologies including HTML, CSS, JavaScript, React, Node.js, Express.js and MongoDB. My curiosity for technology drives me to continuously learn and adapt, tackling new challenges with enthusiasm. Outside of academics, I enjoy staying active with sports like volleyball and badminton, and I am actively involved in various extracurricular activities and competitions.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "Research Intern",
    company: "City, University of London",
    description: `Conducted research and analysis on Coalition for Content Provenance and Authenticity (C2PA) implementations for deepfake detection.
Developed my own C2PA implementation using ReactJS and NodeJS SDK of Content Authenticity Initiative(CAI) that can achieve a 95% verification accuracy for C2PA manifests`,
    technologies: [
      "C2PA",
      "Deepfake Detection",
      "Image Processing",
      "Metadata",
    ],
  },
  {
    year: "Apr 2024 - May 2024",
    role: "Web Development Intern",
    company: "Suvidha Foundation",
    description: `Collaborated with the Suvidha Foundation NGO team to revamp their website. Engineered the website using HTML, CSS, JavaScript, Bootstrap, and React. Implemented SEO best practices to improve online visibility.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Ascend",
    image: project1,
    description:
      "Developed a customized test platform to assess various Tech skills. Implemented personalized roadmaps, leading to a 20% increase in user growth. Integrated custom Machine Learning models to recommend relevant articles based on user score. Designed a comprehensive business plan and go-to-market strategy for implementing new ideas",
    technologies: [
      "React",
      "Node.js",
      "Javascript",
      "MongoDB",
      "Express.Js",
      "Tensor Flow",
    ],
    github: "https://github.com/Manoj-Katta/Ascend",
  },
  {
    title: "Chat Time",
    image: project2,
    description:
      "Developed a Chat Application using the MERN stack. Implemented one-on-one and group chat functionalities using WebSockets and incorporated an AI-assisted chatbot to enhance user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    github: "https://github.com/Manoj-Katta/Chat_time",
  },
  {
    title: "My_C2PA_TOOL",
    image: C2PA_Tool,
    description:
      "Created an innovative tool using the C2PA Node.js SDK and React JS to add and verify provenance manifests, strengthening digital content security. Implemented a solution to ensure the authenticity and integrity of images, effectively countering deepfake threats. Demonstrated advanced skills in Node.js and React JS by developing a custom content provenance tool aligned with the C2PA standard. Utilized a framework supported by Adobe, Microsoft, Intel, ARM, BBC, and Truepic, showcasing a commitment to combating misinformation and enhancing digital authenticity.",
    technologies: ["React", "Node.js", "Express.js", "C2PA"],
    github: "https://github.com/Manoj-Katta/My_C2PA_Tool",
  },
  {
    title: "Email Tracker",
    image: Email_Track,
    description:
      "Built an email tracking system to monitor email opens and interactions. Implemented a tracking pixel to capture email open events and stored metadata in MongoDB. Developed a dashboard to visualize email interactions, enhancing user insights. Resolved Gmail blacklisting issues by switching to Thunderbird for manual email sending.",
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "Vercel"],
    github: "https://github.com/Manoj-Katta/email-tracker",
    website: "https://email-tracker-frontend.vercel.app/",
  },
  {
    title: "Chef Gemini",
    image: Chef_Gemini,
    description:
      "Developed a recipe generation tool using the Gemini API. Users can input a list of ingredients, and the app generates creative recipe suggestions. Optimized the UI for a seamless and engaging experience.",
    technologies: ["React.js", "Gemini API", "Vercel"],
    github: "https://github.com/Manoj-Katta/chef_gemini",
    website: "https://chef-gemini-ten.vercel.app/",
  },
  {
    title: "Food-Restaurant-Frontend",
    image: food_restaurant,
    description:
      "Developed a visually stunning and fully responsive food ordering website frontend using React.js, ensuring a seamless user experience across all devices.",
    technologies: ["React"],
    github: "https://github.com/Manoj-Katta/restaurant",
    website: "https://food-restaurant-frontend.netlify.app/",
  },
];

export const SKILLS = {
  programmingLanguages: ["C++", "Python"],
  webDevelopment: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React JS",
    "Node JS",
    "MongoDB",
    "Express JS",
  ],
  softwares: ["Git", "Onshape", "MySQL", "PowerPoint"],
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Machine Learning",
    "Computer Architecture",
    "High Performance Computer Systems",
  ],
};

export const CERTIFICATIONS = [
  {
    title: "The Complete 2023 Web Development Bootcamp",
    provider: "Udemy",
  },
];

export const ADDITIONAL_DETAILS = {
  achievements: ["Solved over 400+ problems on Leetcode and GFG combined."],
  positionsOfResponsibility: [
    "Representative of Career and Development Services, IIT Jammu",
    "Head of Content and Design Team in Career and Development Services, IIT Jammu",
  ],
  extracurricularActivities: [
    "Participated in the 55th Inter IIT Sports Meet and qualified for pre-quarter finals.",
    "Participated in Inter IIT Tech Meet 12.0",
    "Participated in various case study competitions like RED BRICK by IIM Ahmedabad, Be the CXO.",
    "Hosted Case Study Competition StrategiQ and Pan India stock market trading competition StockGro.",
    "Volunteered in Technunctus-22, 23 and Renao-23.",
  ],
  hobbies: ["Volleyball", "Badminton", "Gym"],
  languages: ["English", "Hindi", "Telugu"],
};

export const CONTACT = {
  address: "Andhra Pradesh, India",
  phoneNo: "+91 8309507120",
  email: "manojkatta1173@gmail.com",
};

