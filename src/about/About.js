import React from "react";
import styles from "./About.module.css"
import containerStyles from "../common/styles/container.module.css"




function About() {

    return (
        <div className={styles.aboutBlock}>
            <div className={styles.lineStyling}>
                <div className={styles.stylCircle}></div>
                <div className={styles.stylCircle}></div>
                <div className={styles.styleLine}></div>
            </div>
            <div className={`${styles.aboutBody} ${containerStyles}`}>
                <div className={styles.aboutDescription}>
                    <h2 >"title</h2>
                    <p>"descroption""</p>
                </div>
                <div className={styles.aboutPhoto}>
                    <img

                    />
                </div>
            </div>
        </div>
    )
}

export default About