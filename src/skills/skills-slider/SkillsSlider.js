import React from 'react';
import Marquee from "react-fast-marquee";
import styles from "./SkillsSlider.module.scss"
import {SkillBox} from "./skillBox/SkillBox";
import {skillsData} from "../../data/skillsData";


export const SkillsSlider = () => {
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

