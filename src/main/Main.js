import React from "react";
import style from "./Main.module.css"



function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>My name is Maksim</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Main;