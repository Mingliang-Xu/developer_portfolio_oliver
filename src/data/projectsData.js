import eight from "../assets/svg/projects/eight.svg";
import seven from "../assets/svg/projects/seven.svg";
import six from "../assets/svg/projects/six.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Foundation Capstone",
    projectDesc: `This project demonstrates basic operation of CRUD, API requests, and static website construction learned during 8-week's foundational study of JavaScript, HTML, CSS.`,
    tags: ["Vanilla JavaSvript, HTML, CSS, Express, Axios, Postgres"],
    code: "https://github.com/Mingliang-Xu/my_first_capstone",
    demo: "https://www.youtube.com/watch?v=vMFG1UokZsw&t=2s",
    image: six,
  },
  {
    id: 2,
    projectName: "Share A Random Fact",
    projectDesc: `This is my first full-stack project, featuring JavaScript, React for front-end, Supabase for back-end. Use Netlify for deployment, it showcases my improvement and commitment to becoming a software engineer.`,
    tags: ["React, JavaScript, Expres, HTML, CSS, Supabase"],
    code: "https://github.com/Mingliang-Xu/share_a_random_fact",
    demo: "https://onerandomfactperday.netlify.app",
    image: seven,
  },
  {
    id: 3,
    projectName: "Web Dev Capstone",
    projectDesc:
      "This project is a fullstack web app built with better user experience powered by React, Hooks, Node and Sequelize.It marks my graduation from 16-week's of coding bootcamp",
    tags: ["JavaScript, React, HTML, CSS, Node, Express, Sequelize"],
    code: "https://github.com/Mingliang-Xu/specs_capstone_oliver",
    demo: "https://www.youtube.com/watch?v=u3xWnH1a9Cg",
    image: eight,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
