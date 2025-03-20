export const projects = [
  {
    title: 'NC News Web App <span class="nowrap"> (Solo Project) </span>',
    image: {
      src: "./img/nc-news-laptop-mockup.png",
      width: 1979,
      height: 1350,
      alt: "NC News App Homepage Screenshot",
    },
    figc: "NC News App",
    paragraphs: {
      p1: "A News App which allows the user to perform actions such as browsing different articles, filtering them by topic, sort them by date, comment count, or votes.",
      p2: "They can order in ascending or descending order. Clicking on an article leads to its full view. Users can upvote/downvote, post/delete comments (if they are the author), and sign in as predefined users.",
    },
    links: {
      live: "https://nc-news-uk.netlify.app/",
      source: "https://github.com/Iagrah99/nc-fe-project",
    },
    techStack: [
      {
        name: "React",
        image: {
          src: "./img/icons/React-logo.png",
          alt: "React Logo",
          title: "React",
        },
      },
      {
        name: "React Bootstrap",
        image: {
          src: "./img/icons/React-Bootstrap-Icon.png",
          alt: "React Bootstrap Logo",
          title: "React Bootstrap",
        },
      },
      {
        name: "CSS",
        image: {
          src: "./img/icons/CSS-logo.png",
          alt: "CSS Logo",
          title: "CSS",
        },
      },
    ],
  },

  {
    title: 'NC News API Server <span class="nowrap"> (Solo Project) </span>',
    image: {
      src: "./img/api-laptop-mockup.png",
      width: 450,
      height: 353,
      alt: "NC News API Screenshot",
    },
    figc: "NC News API Server",
    paragraphs: {
      p1: " A backend REST Server API, which is consumed by the NC News Web App. It implements CRUD operations through HTTP requests to interact with a PostgreSQL database, which utilises queries that are tailored for specific endpoints.",
      p2: "The Structure of the API follows the MVC (Model, View, Controller) architectural design pattern which organises the application into different logical components.",
    },
    links: {
      live: "https://nc-news-project-imqq.onrender.com/api",
      source: "https://github.com/Iagrah99/nc-be-project",
    },
    techStack: [
      {
        name: "PostgreSQL",
        image: {
          src: "./img/icons/postgresql-icon.png",
          alt: "PostgreSQL Logo",
          title: "PostgreSQL",
        },
      },
      {
        name: "Express JS",
        image: {
          src: "./img/icons/Express_Logo.png",
          alt: "Express JS Logo",
          title: "Express JS",
        },
      },
      {
        name: "Node JS",
        image: {
          src: "./img/icons/Node-Js-Logo.png",
          alt: "Node JS Logo",
          title: "Node JS",
        },
      },
    ],
  },

  {
    title: 'PlantPal Mobile App <span class="nowrap"> (Group Project) </span>',
    image: {
      src: "./img/plantpal-phone-mockup.png",
      width: 201,
      height: 427,
      alt: "Plant Pal Sign Up Page Screenshot",
    },
    figc: "PlantPal Mobile App",
    paragraphs: {
      p1: "Plant Pal is a full-stack cross platform mobile app for Android and iOS which helps users keep track of their plants and maintain their health in an engaging way.",
      p2: "Features include plant identifications via photo, personalised names for each plant in a user's collection and countdowns for feeding and watering times. Users may also delete plants from their account if needed.",
    },
    links: {
      live: "https://www.youtube.com/watch?v=cWCqloX4GWYi",
      source: "https://github.com/lvl7wizard/PlantPal",
    },
    techStack: [
      {
        name: "MongoDB",
        image: {
          src: "./img/icons/MongoDB-Logo.png",
          alt: "MongoDB Logo",
          title: "MongoDB",
        },
      },
      {
        name: "Express JS",
        image: {
          src: "./img/icons/Express_Logo.png",
          alt: "Express JS Logo",
          title: "Express JS",
        },
      },
      {
        name: "React Native",
        image: {
          src: "./img/icons/React-Native-Logo.png",
          alt: "React Native Logo",
          title: "React Native",
        },
      },
      {
        name: "Node JS",
        image: {
          src: "./img/icons/Node-Js-Logo.png",
          alt: "Node JS Logo",
          title: "Node JS",
        },
      },
    ],
  },

  {
    title: 'Pawfect Events <span class="nowrap"> (Solo Project) </span>',
    image: {
      src: "./img/pawfect-events-mockup.png",
      width: 2135,
      height: 1457,
      alt: "Pawfect Events Homepage Screenshot",
    },
    figc: "Pawfect Events Fullstack Website Application",
    paragraphs: {
      p1: "Pawfect Events serves as a centralised platform for users to discover, organise, and participate in various dog-related events. Built using the PERN stack, the app provides organisers with the tools to create and manage events, while users can browse available events, sign up, and keep track of their upcoming events.",
      p2: "Whether it's a dog-walking meetup, a dog agility competition, or a dog training workshop, Pawfect Events allows users to explore different types of events tailored to their interests.",
    },
    links: {
      live: "https://pawfect-events.vercel.app/",
      source: "https://github.com/Iagrah99/pawfect-events",
    },
    techStack: [
      {
        name: "PostgreSQL",
        image: {
          src: "./img/icons/postgresql-icon.png",
          alt: "PostgreSQL Logo",
          title: "PostgreSQL",
        },
      },
      {
        name: "Express JS",
        image: {
          src: "./img/icons/Express_Logo.png",
          alt: "Express JS Logo",
          title: "Express JS",
        },
      },
      {
        name: "React",
        image: {
          src: "./img/icons/React-logo.png",
          alt: "React Logo",
          title: "React",
        },
      },
      {
        name: "Node JS",
        image: {
          src: "./img/icons/Node-Js-Logo.png",
          alt: "Node JS Logo",
          title: "Node JS",
        },
      },
    ],
  },

  {
    title: 'FoodLogPro <span class="nowrap"> (Solo Project) </span>',
    image: {
      src: "./img/foodlogpro-mockup.png",
      width: 666,
      height: 375,
      alt: "FoodLogPro Homepage Screenshot",
    },
    figc: "FoodLogPro Fullstack Website Application",
    paragraphs: {
      p1: "A full-stack web designed for meal tracking, focused on recording dinner records. Built with the PERN stack and styled using Tailwind CSS, the app features secure authentication via bcrypt for password hashing and JSON Web Token (JWT) for authorisation.",
      p2: "This project stems from a personal need to organise family meals and showcases practical, user-focused design and robust backend integration.",
    },
    links: {
      live: "https://foodlogpro.vercel.app/",
      source: "https://github.com/Iagrah99/foodlogpro",
    },
    techStack: [
      {
        name: "PostgreSQL",
        image: {
          src: "./img/icons/postgresql-icon.png",
          alt: "PostgreSQL Logo",
          title: "PostgreSQL",
        },
      },
      {
        name: "Express JS",
        image: {
          src: "./img/icons/Express_Logo.png",
          alt: "Express JS Logo",
          title: "Express JS",
        },
      },
      {
        name: "React",
        image: {
          src: "./img/icons/React-logo.png",
          alt: "React Logo",
          title: "React",
        },
      },
      {
        name: "Node JS",
        image: {
          src: "./img/icons/Node-Js-Logo.png",
          alt: "Node JS Logo",
          title: "Node JS",
        },
      },
    ],
  },

  {
    title: 'FoodLogPro Mobile <span class="nowrap"> (Solo Project) </span>',
    image: {
      src: "./img/flp-phone-mockup-2.png",
      width: 201,
      height: 427,
      alt: "FoodLogPro Mobile Meals Screen",
    },
    figc: "FoodLogPro Fullstack Mobile Application",
    paragraphs: {
      p1: "A full-stack mobile application designed to deliver a seamless and intuitive meal-tracking experience, bringing the core functionality of the FoodLogPro website to mobile users.",
      p2: "Developed with React Native, Expo, and NativeWind, the app enables users to log, edit, and delete their meals efficiently. The app also features secure authentication via bcrypt for password hashing and JSON Web Token (JWT) for authorisation.",
    },
    links: {
      live: "https://www.youtube.com/watch?v=cYTlQAdOflk",
      source: "https://github.com/Iagrah99/flp-app",
    },
    techStack: [
      {
        name: "PostgreSQL",
        image: {
          src: "./img/icons/postgresql-icon.png",
          alt: "PostgreSQL Logo",
          title: "PostgreSQL",
        },
      },
      {
        name: "Express JS",
        image: {
          src: "./img/icons/Express_Logo.png",
          alt: "Express JS Logo",
          title: "Express JS",
        },
      },
      {
        name: "React Native",
        image: {
          src: "./img/icons/React-Native-Logo.png",
          alt: "React Native Logo",
          title: "React Native",
        },
      },
      {
        name: "Node JS",
        image: {
          src: "./img/icons/Node-Js-Logo.png",
          alt: "Node JS Logo",
          title: "Node JS",
        },
      },
    ],
  },
];
