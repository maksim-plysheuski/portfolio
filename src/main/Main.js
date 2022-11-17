import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/container.module.css"



function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hello!</span>
                    <h1>My name is Maksim</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;