import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML/CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit consectetur adipisicing elit"}/>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit "}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit"}/><Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit"}/><Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit"}/><Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;