import {FaLaptopCode, FaTasks} from "react-icons/fa"
import {MdOutlineCastForEducation} from "react-icons/md"
import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript, SiMaterialui, SiPostman,
    SiReact,
    SiRedux,
    SiSass,
    SiStorybook,
    SiTypescript
} from "react-icons/si";
import {AiFillApi} from "react-icons/ai";

export const userData = {
    name: 'Maksim Plysheuski',
    homePageText: 'I enjoy creating web applications that provide real value to the end user.',
    email: "plysheuski.maksim@gmail.com",
    phone: '+375447406523',
    telegram: 'https://t.me/plysheuski',
    gitHub: 'https://github.com/maksim-plysheuski',
    codeWars: 'https://www.codewars.com/users/maksim-plysheuski',
    linkedIn: 'https://www.linkedin.com/in/maksim-plysheuski',
    skype: 'https://join.skype.com/invite/zOc4ufeIaFew',
    projects: [
        {
            id: "1",
            title: "LinguaLearn",
            stack: 'React, TypeScript, Redux-toolkit, RKT query, Redux-Thunk, React Router, REST API, Axios, React hook form, Yup, MUI, SCSS',
            projectDescription: "Language learning app",
            keyFeatures: ["Create tasks lists", "Learn New Words", "Memorization Tools", "Search friends packs", "Rating System"],
            projectIcon: <MdOutlineCastForEducation/>,
            codeUrl: 'https://github.com/maksim-plysheuski/lingualearn',
            deployUrl: 'https://maksim-plysheuski.github.io/lingualearn/',
        },
        {
            id: "2",
            title: "TaskManager",
            stack: 'React, TypeScript, Redux-toolkit, Redux-Thunk, Unit tests, React Router, REST API, Axios, Formik, MUI, HTML, SCSS, CSS Module',
            projectDescription: "Designed to simplify daily tasks",
            keyFeatures: ["Create Lists and Tasks", "Mark Completed Tasks", "Sort, Edit and Remove", "Store online"],
            projectIcon: <FaTasks/>,
            codeUrl: 'https://github.com/maksim-plysheuski/tasks-manager',
            deployUrl: 'https://maksim-plysheuski.github.io/tasks-manager/',
        },
    ],
    skills: [
        {
            id: "1",
            title: "Javascript",
            icon: <SiJavascript/>
        },
        {
            id: "2",
            title: "Typescript",
            icon: <SiTypescript/>
        },
        {
            id: "3",
            title: "React",
            icon: <SiReact/>
        },
        {
            id: "4",
            title: "Redux Toolkit",
            icon: <SiRedux/>
        },
        {
            id: "5",
            title: "HTML5",
            icon: <SiHtml5/>
        },
        {
            id: "6",
            title: "CSS3",
            icon: <SiCss3/>
        },
        {
            id: "7",
            title: "Git",
            icon: <SiGit/>
        },
        {
            id: "8",
            title: "SASS",
            icon: <SiSass/>
        },
        {
            id: "9",
            title: "Storybook",
            icon: <SiStorybook/>
        },
        {
            id: "10",
            title: "Postman",
            icon: <SiPostman/>
        },
        {
            id: "11",
            title: "Material UI",
            icon: <SiMaterialui/>
        },
        {
            id: "12",
            title: "Unit Testing",
            icon: <FaLaptopCode/>
        },
        {
            id: "13",
            title: "REST API",
            icon: <AiFillApi/>
        },
    ],
    aboutMeText: 'My name is Maksim. I\'m frontend developer based in Minsk, Belarus. I have an experience in building apps using React, JavaScript, TypeScript. I aim to enhance my skills in this field, stay updated with the latest technologies and expand my stack with new tools. In my free time, I enjoy solving code challenges on Codewars and improving my English language'
}