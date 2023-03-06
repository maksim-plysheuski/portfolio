import React from "react";
import styles from "./About.module.css"


function About() {

    return (
        <div className={styles.aboutBlock}>
            <div className={styles.lineStyling}>
                <div className={styles.stylCircle}></div>
                <div className={styles.stylCircle}></div>
                <div className={styles.styleLine}></div>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.aboutDescription}>
                    <h2>About Me</h2>
                    <p>My name is Maksim. I'm a frontend developer based in Minsk, Belarus. <br/><br/> I’m experienced developer in building apps using React, JavaScript, TypeScript. I aim to enhance my skills in this field, stay updated with the latest technologies and expand my stack with new tools. In my free time, I enjoy solving code challenges on Codewars and improving my English language.</p>
                </div>
                {/*<div className={styles.aboutPhoto}>PHOTO</div>*/}
            </div>
        </div>
    )
}

export default About