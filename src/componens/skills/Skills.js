import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "../../common/styles/container.module.css"
import SingleSkill from "./singleSkill/SingleSkill";
import {userData} from "../../common/data/userData";
import {Title} from "../../common/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock} id='skills'>
            <div className={`${styleContainer.container} ${style.skillsBody}`}>
                <Title title="Skills"/>
                <p>
                    I improve my skills everyday.<br/>Practice makes perfect.
                </p>
                <div className={style.skillsBodyContainer}>
                    {userData.skills.map(s => <SingleSkill key={s.id} title={s.title} icon={s.icon}/>)}
                </div>
            </div>
        </div>
    );
}

export default Skills;