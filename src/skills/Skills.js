import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/container.module.css"
import SingleSkill from "./single-skill/SingleSkill";
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
                <Title title="Skills"/>
            <div className={style.skillsBody}>
                <p>
                    Everyday I try to find out something new to improve my skills.<br/>Practice makes perfect.
                </p>
                <div className={style.skillsBodyContainer}>
                    {skillsData.map(s => <SingleSkill key={s.id} title={s.title} icon={s.icon}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;