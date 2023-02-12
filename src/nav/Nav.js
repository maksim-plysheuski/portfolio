import React from "react";
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to="/main">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
    );
}

export default Nav;