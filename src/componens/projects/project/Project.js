import React from "react";
import style from "./Project.module.scss"


function Project(props) {
    const {title, projectIcon, stack, codeUrl, deployUrl} = props.data

    return (
        <div className={style.project}>
            <h3 className={style.projectTitle}>{title}</h3>
            <div className={style.icon}>{projectIcon}</div>
            <p className={style.stack}>{stack}</p>
            <div className={style.buttonsContainer}>
                <a href={codeUrl} target="_blank" rel="noreferrer">
                    <button className={style.btn}>Code</button>
                </a>
                <a href={deployUrl} target="_blank" rel="noreferrer">
                    <button className={style.btn}>UI</button>
                </a>
            </div>
        </div>
    );
}

export default Project;