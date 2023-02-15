import React from 'react';
import Marquee from "react-fast-marquee";
import {SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiGit, SiRedux, SiPostman, SiSass, SiMaterialui, SiStorybook} from "react-icons/si";
import styles from "./SkillsSlider.module.css"
import {SkillBox} from "./skillBox/SkillBox";
import {FaLaptopCode} from "react-icons/fa";


export const SkillsSlider = () => {

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
            <div className={styles.skillsSliderBlock}>
                <div className={styles.skillScroll}>
                    <Marquee
                        gradient={false}
                        speed={80}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        <SkillBox skills={skillsData}/>
                    </Marquee>
                </div>
            </div>

    )
}

