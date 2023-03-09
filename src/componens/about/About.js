import React from "react";
import styles from "./About.module.css"
import {userData} from "../../common/data/userData";


function About() {
    return (
        <div className={styles.aboutBlock} id='about'>
            <div className={styles.lineStyling}>
                <div className={styles.stylCircle}></div>
                <div className={styles.stylCircle}></div>
                <div className={styles.styleLine}></div>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.aboutDescription}>
                    <h2>About Me</h2>
                    <p>{userData.aboutMeText}</p>
                </div>
                {/*<div className={styles.aboutPhoto}>PHOTO</div>*/}
            </div>
        </div>
    )
}

export default About