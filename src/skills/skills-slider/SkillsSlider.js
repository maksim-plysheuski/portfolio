import React from 'react';
import Marquee from "react-fast-marquee";
import {SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiGit, SiRedux, SiPostman, SiSass, SiMaterialui, SiStorybook} from "react-icons/si";
import styles from "./SkillsSlider.module.css"


export const SkillsSlider = () => {

    return (
            <div className={styles.skillsSliderBlock}>
                <div className={styles.skillScroll}>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        <div className={styles.skillBox}>
                            <SiJavascript className={styles.skillIcon}/>
                            <h3>javascript</h3>
                        </div>
                    </Marquee>
                </div>
            </div>

    )
}

