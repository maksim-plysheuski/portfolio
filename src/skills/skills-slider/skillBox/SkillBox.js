import React from "react"
import styles from "./SkillBox.module.css"


export const SkillBox = (props) => {
    return (
        props.skills.map(s => <div key={s.id} className={styles.skillBox}>
            <div className={styles.skillIcon}>{s.icon}</div>
            <h3>{s.title.toUpperCase()}</h3>
        </div>)
    )
}