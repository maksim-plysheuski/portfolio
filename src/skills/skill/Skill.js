import React from "react";
import style from "./Skill.module.css"
import Fade from "react-reveal/Fade";


function Skill({id, title, icon}) {
    return (
        <Fade bottom>
            <div key={id} className={style.singleSkill}>
                <div className={style.singleSkillContent}>
                    <div className={style.icon}>{icon}</div>
                    <h3>{title}</h3>
                </div>
            </div>
        </Fade>
    );
}

export default Skill;