import React from "react";
import style from "./Project.module.css"


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.pictureContainer}>
                <a className={style.openButton}>Open</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Project;