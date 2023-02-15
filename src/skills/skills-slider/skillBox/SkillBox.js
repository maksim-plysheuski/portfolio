import React from "react"
import {SiJavascript} from "react-icons/si";
import styles from "./SkillBox.module.css"


export const SkillBox = (props) => {
    return (
        <div className={styles.skillBox}>
            <SiJavascript className={styles.skillIcon}/>
            <h3>Javascript</h3>
        </div>
    )
}