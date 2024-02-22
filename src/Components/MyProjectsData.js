import temp0 from "../Images/Projects/temp0.jpeg";
import temp1 from "../Images/Projects/temp1.jpeg";
import temp2 from "../Images/Projects/temp2.jpeg";
import boot from "../Images/Projects/boot.jpeg";
import temp3 from "../Images/Projects/temp3.jpeg";
import tempReact1 from "../Images/Projects/temp-react1.jpeg";
import todos from "../Images/Projects/todos.jpeg";
import weather from "../Images/Projects/weather.png";
import prayersTime from "../Images/Projects/prayersTime.png";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiTailwindcss, SiMui } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";

export const startLink = "";

export const myPersonalInfo = [
  { id: 201, title: "Frist Name: ", info: "Mahmoud" },
  { id: 202, title: "Last Name: ", info: "Ragab" },
  { id: 203, title: "Birthdate: ", info: "1 Aug 2001" },
  { id: 204, title: "Nationality: ", info: "Egyption" },
  { id: 205, title: "Military Service: ", info: " Exempted" },
  { id: 206, title: "Langages: ", info: "Arabic, English" },
  { id: 208, title: "Phone: ", info: "+20 112 253 5612" },
  { id: 207, title: "Email: ", info: "mahmoud.ragab187@gmail.com" },
  { id: 210, title: "Address: ", info: "Giza/ 6th of october" },
  { id: 209, title: "Freelance: ", info: "Available", color: "#01ef92" },
];

export const skills = [
  { id: 201, title: "HTML", icon: <FaHtml5 />, color: "#e56229" },
  { id: 202, title: "CSS", icon: <FaCss3Alt />, color: "#007FFF" },
  { id: 203, title: "JavaScript", icon: <DiJavascript1 />, color: "#EAD41C" },
  { id: 204, title: "React", icon: <FaReact />, color: "#00CEF2" },
  // { id: 205, title: "Next", icon: <SiNextdotjs /> },
  // { id: 206, title: "Node.js", icon: <FaNode />, color: "#5CA74B" },
  // { id: 207, title: "Express", icon: <SiExpress /> },
  // { id: 208, title: "MongoDB", icon: <SiMongodb />, color: "#4E9E42" },
];

export const skills2 = [
  { id: 209, title: "Bootstrap", icon: <FaBootstrap />, color: "#723DBE" },
  //   { id: 210, title: "Material UI", icon: <SiMaterialui />, color: "#007FFF" },
  { id: 211, title: "Github", icon: <FaGithub /> },
  { id: 212, title: "Git", icon: <FaGitAlt />, color: "#DE4C36" },
  { id: 213, title: "Redux", icon: <SiRedux />, color: "#764ABC" },
  // { id: 214, title: "SASS", icon: <FaSass />, color: "#c76494" },
  { id: 214, title: "Tailwind", icon: <SiTailwindcss />, color: "#07b7d7" },
  { id: 290, title: "MaterialUI", icon: <SiMui />, color: "#007fff" },
];

export const timelineData = [
  {
    date: "Dec/2022 - Sep/2023",
    title: "Front/Back-end Developer Diploma",
    organization: "SEF Future",
    icon: <FaLaptopCode />,
  },
  {
    date: "2019 - 2023",
    title: "Computer and Information (Bioinformatics)",
    organization: "Bachelor Degree",
    icon: <GiOpenBook />,
  },
];

export const myProjects = [
  {
    id: 113,
    title: "First Design",
    img: temp0,
    link: "https://mahmoudragab7.github.io/temp1-elzero/",
    githubLink: "https://github.com/mahmoudRagab7/temp1-elzero",
    Language: ["HTML", "CSS", "Media Query"],
    description: "My First Design Ever In Web Field.",
  },
  {
    id: 111,
    title: "Kasper",
    img: temp1,
    link: "https://mahmoudragab7.github.io/Templete1/",
    githubLink: "https://github.com/mahmoudRagab7/Templete1",
    Language: ["HTML", "CSS", "Media Query"],
    description:
      "Second Design For Me I Was Trying To Implement Some CSS Trickes And Taking Care Of Mobile View.",
  },
  {
    id: 110,
    title: "Furniture Tamplate",
    img: temp2,
    link: "https://mahmoudragab7.github.io/Templete-2/",
    githubLink: "https://github.com/mahmoudRagab7/Templete-2",
    Language: ["HTML5", "CSS3"],
    description: "Furniture Tamplate HTML and some CSS.",
  },
  {
    id: 109,
    title: "Bondi",
    img: boot,
    link: "https://mahmoudragab7.github.io/Bootstrab-Design/",
    githubLink: "https://github.com/mahmoudRagab7/Bootstrab-Design",
    Language: ["HTML", "CSS", "Bootstrap"],
    description:
      "Simple Responsive Design In My Frist Attempt Using Bootstrap.",
  },
  {
    id: 108,
    title: "Course Website",
    img: temp3,
    link: "https://mahmoudragab7.github.io/Templete-3/",
    githubLink: "https://github.com/mahmoudRagab7/Templete-3",
    Language: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: "Simple Responsive Course Website.",
  },
  {
    id: 107,
    title: "React Portfolio",
    img: tempReact1,
    link: "https://mahmoudragab7.github.io/react-assignment/",
    githubLink: "https://github.com/mahmoudRagab7/react-assignment",
    Language: ["HTML", "CSS", "Bootstrap", "Javascript", "React"],
    description: "First Attempt Using React.js.",
  },
  {
    id: 106,
    title: "Todos",
    img: todos,
    link: "https://mahmoudragab7.github.io/refactored-todos-react/",
    githubLink: "https://github.com/mahmoudRagab7/refactored-todos-react",
    Language: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "Material UI",
    ],
    description: "A CRUD Project, Todos Websites To List All Your Notes.",
  },
  {
    id: 105,
    title: "Weather Website",
    img: weather,
    link: "https://65b51d20f17810aa88a95a3e--inquisitive-basbousa-494bd8.netlify.app/",
    githubLink: "https://github.com/mahmoudRagab7/api-redux-weather",
    Language: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "Material UI",
      "Redux",
    ],
    description:
      "Website Display The Weather Of Fayoum And Some Other Descriptions Using Open Weather API (Lat, Lon ==> For Fayoum City).",
  },
  {
    id: 104,
    title: "Prayers Time",
    img: prayersTime,
    link: "https://65bbb0432714df16ea550e59--superlative-dragon-a91803.netlify.app/",
    githubLink: "https://github.com/mahmoudRagab7/Prayer-Times-Api",
    Language: ["HTML", "CSS", "Javascript"],
    description:
      "This Website Show The Prayers Time For Some Cities In Egypt Like (Fayoum, Beni Suef, Cairo, Alexandrea) Using Adhan API.",
  },
];
