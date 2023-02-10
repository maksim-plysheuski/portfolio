import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Project from "./project/Project";
import {Title} from "../common/components/Title";
import todolistImage from "./../assets/image/todolist.svg"
import socialImage from "./../assets/image/socialNetwork.svg"
import counterImage from "./../assets/image/counter.svg"


function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };

    const todolist = {
        backgroundImage: `url(${todolistImage})`,
    };

    const counter = {
        backgroundImage: `url(${counterImage})`,
    };


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project style={todolist} title={"Todolist"}
                             description={"React, Redux, TypeScript, Material UI, Unit Tests"}/>
                    <Project style={social} title={"Social Network"}
                             description={"React, Redux, TypeScript, Material UI, Unit Tests"}/>
                    <Project style={counter} title={"Counter"}
                             description={"React, Redux, TypeScript, Material UI, Unit Tests"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
