import project1 from "../assets/projects/Ascend.png";
import project2 from "../assets/projects/chatTime.png";
import C2PA_Tool from "../assets/projects/C2PA_Tool.png";
import Email_Track from "../assets/projects/Email_Track.png";
import Chef_Gemini from "../assets/projects/chef_gemini.png";
import ticketBooking from "../assets/projects/Ticket-Booking.png";
import ragApp from "../assets/projects/rag_app.svg";

export const HERO_CONTENT = `Software Engineer at BrowserStack on Percy, its visual testing product. I build backend features across the Rails API and the Node.js CLI and SDKs, and work on the platform underneath them: storage and data lifecycle on GCS, the Sidekiq/Redis job pipeline, and browser rendering infrastructure. Computer Science graduate from IIT Jammu.`;

export const ABOUT_TEXT = `I'm a software engineer who likes the backend and platform side of products: data pipelines, job queues, storage and the infrastructure that keeps them reliable. At BrowserStack I work on Percy, shipping customer-facing features such as popover and dialog capture in the Percy CLI, and platform work such as a resource-retention deletion pipeline, browser upgrades across the rendering stack, and canary deploys for the job dispatcher. Before that I interned at Paytm on the payouts backend, and did research on C2PA content provenance at City, University of London. I studied Computer Science at IIT Jammu. Outside work I play volleyball and badminton.`;

export const EXPERIENCES = [
  {
    year: "Sep 2025 - Present",
    role: "Software Engineer",
    company: "BrowserStack",
    description: `Built popover and dialog capture in @percy/cli (500K+ weekly downloads) and added SDK-wide global config, unblocking an enterprise deal.
Designed and built a resource-retention deletion pipeline that removes page assets 3 months after last use, plus a backlog sweep across ~1B+ eligible resources on a shared worker fleet, with a guard that never deletes assets a live build still uses. Targets ~$25-34K/yr in GCS savings.
Shipped Firefox 146, Edge 142/143 and Chrome 143 end to end across base image, renderer, API, cache worker and CLI, using production build replays for the go/no-go, and isolated an Edge 143 render-latency regression to specific bundled browser features.
Built a superuser admin API for browser force-upgrades, with dry-run preview, async runs, rate limiting and single-flight locking, replacing a production-console procedure.
Added canary deploys to the job dispatcher: a canary flag threaded from the API through Redis Lua into a pool-aware scheduler, with an isolated worker pool and a global kill switch.
Reworked the on-call alerts for Sidekiq, compare jobs and the rendering proxy, cutting about 95% of page noise on the proxy alert and reducing triage from about 15 minutes to seconds.`,
    technologies: [
      "Ruby on Rails",
      "Sidekiq",
      "Redis",
      "Node.js",
      "MySQL",
      "GCP",
      "Kubernetes",
      "BigQuery",
      "Honeycomb",
    ],
  },
  {
    year: "Jun 2025 - Sep 2025",
    role: "Software Engineer Intern",
    company: "Paytm",
    description: `Enhanced backend systems handling ₹130+ crore in daily merchant payouts, ensuring high reliability and accurate commission workflows.
Improved revenue reconciliation by upgrading reporting modules and strengthening error-handling in transaction flows.
Set up a RabbitMQ staging cluster to automate report generation, eliminating manual steps and improving efficiency.
Implemented payout-side enhancements for the new Gold Coin feature in Paytm’s Gold Team, ensuring seamless integration and smooth rollout.
Resolved critical Elasticsearch fetch error that was blocking report generation, restoring reporting functionality.`,
    technologies: [
      "Apache Kafka",
      "RabbitMQ",
      "Java",
      "JIRA",
      "Distributed Systems",
      "MySQL",
      "Node js",
      "Jenkins",
      "Bit bucket"
    ],
  },

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
    title: "rag_application",
    image: ragApp,
    description:
      "Config-driven retrieval-augmented generation over Markdown, text and PDF documents. Fuses BM25 and local vector search with reciprocal rank fusion and returns answers with citations to the exact section or page. Includes a retrieval eval harness: on a 36-question Kubernetes docs set, hybrid search reaches 86.1% hit@5 against 80.6% for BM25 and 69.4% for vectors alone. Usable as a Node library, a CLI or an HTTP API.",
    technologies: ["Node.js", "Express", "Transformers.js", "BM25", "Gemini API"],
    github: "https://github.com/Manoj-Katta/rag_application",
  },
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
    website: "https://chef-gemini-ten.vercel.app/",
  },
  {
    title: "Train-Booking-System",
    image: ticketBooking,
    description:
      "Built a modular CLI-based train ticket booking system using Java and Gradle with features like seat allocation, dynamic waitlisting, and passenger management. Designed with Java Collections and OOP principles to support future upgrades. Currently upgrading to a Spring Boot REST API with Docker-based deployment and atomic operation support.",
    technologies: ["Java", "Gradle", "Java Collections"],
    github: "https://github.com/Manoj-Katta/Train-Booking-System-backend-cli",
    website: "",
  }

];

export const CONTACT = {
  address: "Andhra Pradesh, India",
  email: "manojkatta1173@gmail.com",
};

