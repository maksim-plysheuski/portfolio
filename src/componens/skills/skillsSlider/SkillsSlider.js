import React from 'react';
import Marquee from "react-fast-marquee";
import styles from "./SkillsSlider.module.scss"
import {SkillBox} from "./skillBox/SkillBox";
import {userData} from "../../../common/data/userData";


export const SkillsSlider = () => {
    return (
            <div className={styles.skillsSliderBlock}>
                <div className={styles.skillScroll}>
                    <Marquee gradient={false} speed={35} play={true}>
                        <SkillBox skills={userData.skills}/>
                    </Marquee>
                </div>
            </div>

    )
}

