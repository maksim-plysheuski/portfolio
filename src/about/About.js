import React from "react";
import styles from "./About.module.css"
import containerStyles from "../common/styles/container.module.css"
import {Title} from "../common/components/Title";


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
                    <p>My name is Maksim. I'm a frontend developer based in Minsk, Belarus. <br/><br/>messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing. This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). </p>
                </div>
                <div className={styles.aboutPhoto}>PHOTO</div>
            </div>
        </div>
    )
}

export default About