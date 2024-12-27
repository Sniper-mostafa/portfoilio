import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  lion,
  kasper,
  sniper,
  school,
  food,
  prayer,
  coffee,
} from "../assets";

export const navLinks = [
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
    title: "React.js & Next.js Developer",
    icon: web,
  },
  {
    title: "PHP & Laravel Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Stack Deans",
    iconBg: "#383E56",
    date: "Jun 2022 - Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Trend Line Media (Remote)",
    iconBg: "#383E56",
    date: "Feb 2024 - Jun 2024",
    points: [
      "ShapeSpearheaded the development and maintenance of full-stack web applications using Laravel and React.js, resulting in enhanced performance and scalability.",
      "Designed and implemented secure  RESTful  APIs formanaging authentication  and data processes across web and mobile platforms.",
      "Collaborated closely with cross-functional teams to introduce new features, improving user engagement and satisfaction.",
      "Streamlined database queries to reduce server load and optimize response times, ensuring a smoother user experience.",
    ],
  },
  {
    title: "Full Stack Developer (Part-Time, Remote)",
    company_name: "Line Media",
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Des 2024",
    points: [
      "Developed responsive and intuitive web interfaces using Next.js, significantly improving user experience across multiple devices.",
      "ShapeWorked closely with backend teams to integrate APIs, ensuring seamless communication between frontend and backend systems.",
      "ShapeCreated reusable components, reducing development time and increasing maintainability for future projects. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lion",
    description:
      "This website is designed to demonstrate how HTML and CSS work together to create a modern, responsive web page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: lion,
    source_code_link: "https://github.com/Sniper-mostafa/Lion",
    live_demo_link: "https://lion-peach-iota.vercel.app",
  },
  {
    name: "Kasper",
    description:
      "This website is designed to demonstrate how HTML and CSS work together to create a modern, responsive web page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: kasper,
    source_code_link: "https://github.com/Sniper-mostafa/Kasper",
    live_demo_link: "https://kasper-self.vercel.app",
  },
  {
    name: "Sniper",
    description:
      "This website is designed to demonstrate how HTML and CSS work together to create a modern, responsive web page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: sniper,
    source_code_link: "https://github.com/Sniper-mostafa/Sniper",
    live_demo_link: "https://sniper-ten.vercel.app",
  },
  {
    name: "Coffee Shop",
    description:
      "This website is designed to demonstrate how HTML, CSS and JavaScript work together to create a modern, responsive web page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
    ],
    image: coffee,
    source_code_link: "https://github.com/Sniper-mostafa/coffee-shop",
    live_demo_link: "https://coffee-shop-one-eosin.vercel.app/",
  },
  {
    name: "Food Delivery Website",
    description:
      "This food delivery platform offers a seamless ordering experience, allowing users to browse local restaurant menus, customize orders, track deliveries in real-time, and make secure payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Sniper-mostafa/Food",
    live_demo_link: "https://food-six-olive.vercel.app",
  },
  {
    name: "School Management Website",
    description:
      "This school management website simplifies administrative tasks and enhances communication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://github.com/Sniper-mostafa/next-dashboard-ui",
    live_demo_link: "https://next-dashboard-ui-lilac.vercel.app",
  },
  {
    name: "Prayer Timer Website",
    description:
      "Stay on top of your daily prayers with ease as our timer updates automatically, keeping you informed of the remaining time for each prayer. Whether you're at home or traveling, we're here to help you maintain your spiritual routine wherever you are.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: prayer,
    source_code_link: "https://github.com/Sniper-mostafa/prayer",
    live_demo_link: "https://prayer-eta.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
