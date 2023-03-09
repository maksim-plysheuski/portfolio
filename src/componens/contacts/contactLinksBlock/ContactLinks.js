import {FiAtSign} from "react-icons/fi";
import {FaGithub, FaLinkedinIn, FaPhone, FaSkype, FaTelegramPlane} from "react-icons/fa";
import React from "react";
import s from "./style.module.scss"
import {userData} from "../../../common/data/userData";


export const ContactLinks = () => {

    return (
        <div className={s.blockContainer}>
            <a href={`mailto: ${userData.email}`} className={s.linkContainer}>
                <div className={s.socialIcon}><FiAtSign/></div>
                <p>plysheuski.maksim@gmail.com</p>
            </a>
            <a href={`tel:${userData.phone}`} className={s.linkContainer}>
                <div className={s.socialIcon}><FaPhone/></div>
                <p>{userData.phone}</p>
            </a>
            <a href={userData.telegram} target="_blank" className={s.linkContainer}>
                <div className={s.socialIcon}><FaTelegramPlane/></div>
                <p>Telegram</p>
            </a>
            <div className={s.socialIconsContainer}>
                <a href="https://github.com/maksim-plysheuski" target="_blank" rel="noreferrer" className={s.icon}>
                    <FaGithub aria-label="GitHub"/>
                </a>
                <a href={userData.linkedIn} target="_blank" rel="noreferrer" className={s.icon}>
                    <FaLinkedinIn aria-label="LinkedIn"/>
                </a>
                <a href={userData.skype} target="_blank" rel="noreferrer" className={s.icon}>
                    <FaSkype aria-label="LinkedIn"/>
                </a>

            </div>
        </div>
    )
}