import React from "react";
import style from "./Main.module.css"
import photo from "../assets/image/profilePhoto.png"
import {NavLink} from "react-router-dom";
import resume from "../assets/pdf/resume.jpg"
import {Button} from "@material-ui/core";


function Main() {
    return <div className={style.mainBlock}>
        <div className={style.mainBlockContainer}>
            <div className={style.leftSide}>
                <div className={style.iconsBlock}>
                    <a href="" target="_blank" rel="noreferrer">hi</a>
                    <a href="" target="_blank" rel="noreferrer">wow</a>
                    <a href="" target="_blank" rel="noreferrer">yes</a>
                </div>
            </div>
            <img className={style.profilePhoto} src={photo}/>
            <div className={style.rightSide}>
                <div className={style.rightSideContent}>
                    <h6>Frontend React Developer</h6>
                    <h1>Maksim Plysheuski</h1>
                    <p>There wasn't a bird in the sky, but that was not what caught her attention. It was the
                        clouds. The deep green that isn't the color of clouds, but came with these. She knew what
                        was coming and she hoped she was preparessd.</p>
                    <div className={style.buttonsContainer}>
                        <a href={resume} download='resume' target='_blank'rel='noreferrer'>
                            <button className={style.resumeBtn}>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Main;

