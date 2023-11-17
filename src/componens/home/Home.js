import React from "react";
import style from "./Main.module.scss"
import photo from "../../assets/image/profilePhoto.png"
import resume from "../../assets/pdf/Frontend Developer - Maksim Plyseuski CV.pdf"
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";
import {Typewriter} from "react-simple-typewriter"
import {userData} from "../../common/data/userData";


function Home() {
    return <div className={style.mainBlock} id="home">
        <div className={style.mainBlockContainer}>
            <div className={style.leftSide}>
                <div className={style.socialIconsBlock}>
                    <a href={userData.linkedIn} target="_blank" rel="noreferrer">
                        <FaLinkedin className={style.icon}/>
                    </a>
                    <a href={userData.gitHub} target="_blank" rel="noreferrer">
                        <FaGithub className={style.icon}/>
                    </a>
                    <a href={userData.codeWars} target="_blank" rel="noreferrer">
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
                            words={[" Developer", " React Developer"]}
                            cursor={true}
                            cursorStyle="|"
                            cursorColor={`rgb(245, 101, 57)`}
                            typeSpeed={77}
                            deleteSpeed={50}
                            delaySpeed={800}
                        />
                    </div>
                    <h1>{userData.name}</h1>
                    <p>{userData.homePageText}</p>
                    <div className={style.buttonsContainer}>
                        <a href={resume}
                           download="Front-end Developer Maksim Plysheuski CV"
                           target="_blank" rel="noreferrer">
                            <button className={style.resumeBtn}>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home;

