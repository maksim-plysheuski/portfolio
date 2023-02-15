import React from "react";
import style from "./Skill.module.css"


function Skill({id, title, icon}) {
    return (
        <div key={id} className={style.singleSkill}>
            <div className={style.singleSkillContent}>
                <div className={style.icon}>{icon}</div>
                <h3>{title}</h3>
            </div>

        </div>
    );
}

export default Skill;