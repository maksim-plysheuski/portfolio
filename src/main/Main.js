import React from "react";
import style from "./Main.module.css"
import photo from "../assets/image/profilePhoto.png"
import resume from "../assets/pdf/resume.jpg"
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiCodewars} from "react-icons/si";


function Main() {
    return <div className={style.mainBlock}>
        <div className={style.mainBlockContainer}>
            <div className={style.leftSide}>
                <div className={style.iconsBlock}>

                    <a href="https://www.linkedin.com/in/plysheuski-maksim" target="_blank" rel="noreferrer">
                        <FaLinkedin className={style.socialIcon} />
                    </a>
                    <a href="https://github.com/maksim-plysheuski" target="_blank" rel="noreferrer">
                        <FaGithub className={style.socialIcon}/>
                    </a>
                    <a href="https://www.codewars.com/users/maksfilms" target="_blank" rel="noreferrer">
                        <SiCodewars className={style.socialIcon}/>
                    </a>
                </div>
            </div>
            <img className={style.profilePhoto} src={photo}/>
            <div className={style.rightSide}>
                <div className={style.rightSideContent}>
                    <h6>Frontend React Developer</h6>
                    <h1>Maksim Plysheuski</h1>
                    <p>JavaScript has made space in all companies irrespective of whether they are big or small. It is convenient and valuable and can create interactive applications and web pages for customers.</p>
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

