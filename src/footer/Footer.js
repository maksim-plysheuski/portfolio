import React from "react";
import style from "./Footer.module.css"
import containerStyle from "../common/styles/container.module.css"


export const Footer = () => {
    return(
        <footer className={style.footerBlock}>
            <div className={`${style.footerContainer} ${containerStyle.container}`}>
                <span>Maksim Plysheuski</span>
                <div className={style.iconsBlock}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>2022 © All rights reserved</span>
            </div>
        </footer>
    )
}

