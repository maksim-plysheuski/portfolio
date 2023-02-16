import React from "react";
import style from "./Project.module.scss"
import Fade from "react-reveal/Fade";


function Project(props) {
    return (
        <Fade bottom>
            <div className={style.project}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <div className={style.image} style={props.style}>
                    <a className={style.openButton}>Open</a>
                </div>
                <p className={style.description}>{props.description}</p>
                <div className={style.stack}>
                <span>
                    React Redux TypeScript
                </span>
                </div>
            </div>
        </Fade>
    );
}

export default Project;