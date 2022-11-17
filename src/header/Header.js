import React from "react";
import style from "./Header.module.css"
import Nav from "../nav/Nav";
import containerStyle from "../common/styles/container.module.css"

function Header() {
    return (
        <div className={style.header}>
            <div className={`${containerStyle.container} ${style.navBlock}`}>
                <Nav />
            </div>
        </div>
    );
}

export default Header;