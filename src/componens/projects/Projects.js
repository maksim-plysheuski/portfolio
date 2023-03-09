import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../../common/styles/container.module.css"
import Project from "./project/Project";
import {Title} from "../../common/components/title/Title";
import {userData} from "../../common/data/userData";


export const Projects = () => {
    return (
        <div className={style.projectsBlock} id="projects">
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    {userData.projects.map((p) => <Project key={p.id} data={p}/>)}
                </div>
            </div>
        </div>
    )
}
