import React from "react";
import style from "./Main.module.scss"
import photo from "../assets/image/profilePhoto.png"
import resume from "../assets/pdf/resume.jpg"
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter'


function Main() {
    return <div className={style.mainBlock}>
        <div className={style.mainBlockContainer}>
            <div className={style.leftSide}>
                <div className={style.socialIconsBlock}>
                    <a href="https://www.linkedin.com/in/plysheuski-maksim" target="_blank" rel="noreferrer">
                        <FaLinkedin className={style.icon}/>
                    </a>
                    <a href="https://github.com/maksim-plysheuski" target="_blank" rel="noreferrer">
                        <FaGithub className={style.icon}/>
                    </a>
                    <a href="https://www.codewars.com/users/maksfilms" target="_blank" rel="noreferrer">
                        <SiCodewars className={style.icon}/>
                    </a>
                </div>
            </div>
            <img className={style.profilePhoto} src={photo} alt="profile-photo"/>
            <div className={style.rightSide}>
                <div className={style.rightSideContent}>
                    <div className={style.typeWriter}>
                        <>Frontend</>
                        <Typewriter
                            words={[' Developer', ' React Developer']}
                            cursor={true}
                            cursorStyle='|'
                            cursorColor={`rgb(245, 101, 57)`}
                            typeSpeed={77}
                            deleteSpeed={50}
                            delaySpeed={800}
                        />
                    </div>
                    <h1>Maksim Plysheuski</h1>
                    <p>I enjoy creating simple, clean applications that provide real value to the end user. I love learning new technologies and putting them into practice.</p>
                    <div className={style.buttonsContainer}>
                        <a href={resume} download="resume" target="_blank" rel="noreferrer">
                            <button className={style.resumeBtn}>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Main;

