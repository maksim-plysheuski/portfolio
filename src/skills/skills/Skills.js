import React from "react";
import style from "./Skills.module.scss"
import {Title} from "../../common/components/Title";
import SingleSkill from "../single-skill/SingleSkill";
import {skillsData} from "../../data/skillsData";
import styleContainer from "../../common/styles/container.module.css"



function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsBody}`}>
                <Title title="Skills"/>
                <p>
                    I improve my skills everyday.<br/>Practice makes perfect.
                </p>
                <div className={style.skillsBodyContainer}>
                    {skillsData.map(s => <SingleSkill key={s.id} title={s.title} icon={s.icon}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;