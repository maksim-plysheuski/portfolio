import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/container.module.css"
import Project from "./project/Project";
import {Title} from "../common/components/Title";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project title={"Todolist"}
                             description={"React, Redux, TypeScript, Material UI, Unit Tests"}/>
                    <Project title={"Social Network"}
                             description={"React, Redux, TypeScript, Material UI, Unit Tests"}/>
                    <Project title={"Counter"}
                             description={"React, Redux, TypeScript, Material UI, Unit Tests"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
