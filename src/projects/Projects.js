import React from "react";
import style from "./Projects.module.css"
import containerStyle from "../common/styles/container.module.css"
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Todolist"}
                             description={"orem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut corporis cumque dolor eius eligendi esse facere harum hic illo ipsam neque officia, praesentium quam reprehenderit temporibus unde ut."}/>
                    <Project title={"Social Network"} description={"orem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut corporis cumque dolor eius eligendi esse facere harum hic illo ipsam neque officia, praesentium quam reprehenderit temporibus unde ut."}/>
                    <Project title={"Counter"}
                             description={"orem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut corporis cumque dolor eius eligendi esse facere harum hic illo ipsam neque officia, praesentium quam reprehenderit temporibus unde ut."}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
