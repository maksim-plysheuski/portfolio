import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/container.module.css"
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Todolist"}
                             description={"orem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur"}/>
                    <Project title={"Social Network"}
                             description={"orem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Project title={"Counter"}
                             description={"orem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut corporis cumque dolor eius eligendi "}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
