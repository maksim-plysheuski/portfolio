import React from "react";
import style from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to="/main">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default Nav;