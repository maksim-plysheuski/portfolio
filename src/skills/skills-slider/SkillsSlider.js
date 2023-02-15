import React from 'react';
import Marquee from "react-fast-marquee";
import {SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiGit, SiRedux, SiPostman, SiSass, SiMaterialui, SiStorybook} from "react-icons/si";
import styles from "./SkillsSlider.module.css"
import {SkillBox} from "./skillBox/SkillBox";


export const SkillsSlider = () => {

    const skillsData = [
        {"Javascript": <SiJavascript/>},
        {"Typescript": <SiTypescript/>},
        {"React": <SiReact/>},
        {"Redux": <SiRedux/>},
        {"HTML": <SiHtml5/>},
        {"CSS": <SiCss3/>},
        {"GIT": <SiGit/>},
        {"Storybook": <SiStorybook/>},
        {"SASS": <SiSass/>},
        {"Postman": <SiPostman/>},
        {"Material UI": <SiMaterialui/>}
        ]

    return (
            <div className={styles.skillsSliderBlock}>
                <div className={styles.skillScroll}>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        <SkillBox/>
                    </Marquee>
                </div>
            </div>

    )
}

