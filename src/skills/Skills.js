import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";
import {Title} from "../common/components/Title";
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
import {FaLaptopCode} from "react-icons/fa";


function Skills() {
    const skillsData = [
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
            title: "Redux",
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
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML/CSS"}/> description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit consectetur adipisicing elit"}
                    <Skill title={"JS"}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit"}/><Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit"}/><Skill title={"React"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;