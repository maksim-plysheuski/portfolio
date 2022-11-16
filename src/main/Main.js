import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/container.module.css"



function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there!</span>
                    <h1>My name is Makson</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;