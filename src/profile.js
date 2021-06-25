// website animatiions
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
const header = {
  name: "Juan Santos",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
const section2title = "About Me";
const about = {
  paragraph:
    "Self starting Full Stack Web Developer, with a keen knack for fast learning. My background in Entrepreneurial Finance and Technology immersed in high risk, high stress situations, gives me a great base for a Fintech Developers Route. I have recently acquired a Full Stack Certificate from Rutgers University, New Jersey. Being rewarded with a high caliber experience in HTML, JavaScript, CSS, Node, Database, AWS. I possess the habits of learning, problem-solving and effectively colaborating, I see myself bringing value to your company, by creating, deploying and maintaining state of the art apps, websites and projects.",
};

const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
];
const section3Title = "My Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Bet-Fullstack",
    skills: ["HTML, CSS, JS"],
    repo: "https://github.com/thereal-baitjet/bet-fullstack",
    url: "https://thereal-baitjet.github.io/bet-fullstack/",
  },
  {
    id: "project2",
    name: "Flavor-Saver",
    skills: ["HTML, CSS, JS, Handlebars, MVC"],
    repo: "https://github.com/thereal-baitjet/flavor-saver",
    url: "https://tranquil-sea-86100.herokuapp.com/",
  },
  {
    id: "project3",
    name: "Fitness-Tracker",
    skills: ["HTML, CSS, JS"],
    repo: "https://github.com/thereal-baitjet/fitness-tracker",
    url: "https://afternoon-escarpment-85989.herokuapp.com/?id=60be7a89456ef3001545b8c8",
  },
  {
    id: "project4",
    name: "Note-Taker",
    skills: ["HTML, CSS, JS"],
    repo: "https://github.com/thereal-baitjet/note-taker",
    url: "https://stark-retreat-32872.herokuapp.com/",
  },
  {
    id: "project5",
    name: "Work-Day-Scheduler",
    skills: ["HTML, CSS, JS"],
    repo: "https://github.com/thereal-baitjet/Work-Day-scheduler",
    url: "https://thereal-baitjet.github.io/Work-Day-scheduler/",
  },
  {
    id: "project6",
    name: "PassWordGen2",
    skills: ["HTML, CSS, JS"],
    repo: "https://github.com/thereal-baitjet/PassWordGen2",
    url: "https://thereal-baitjet.github.io/PassWordGen2/",
  },
];
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "self starting developer, looking for work, serious inquiries only please.",
  copyright: "Juan Santos",
  contactUrl: "https://form.jotform.com/211735847673061",
};
const social = {
  github: "https://github.com/thereal-baitjet",
  facebook: "https://www.facebook.com/profile.php?id=100045506024542",
  linkedin: "https://www.linkedin.com/in/juanga-santos",
  instagram: "https://instagram.com/baitjet",
  resume: "https://docs.google.com/document/d/1rrljrbpKE2TOUa-qmgnSLhVUdvxXC6gZsEReA-LjKWQ/edit?usp=sharing",
};
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
