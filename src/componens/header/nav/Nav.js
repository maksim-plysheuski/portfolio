import React from "react";
import style from "./Nav.module.scss"
import {NavHashLink} from "react-router-hash-link";

function Nav() {
    const navTitles = ['Home', 'Projects', 'Skills', 'About', 'Contact']

    const navLinks = navTitles.map((t, i) => {
        return <NavHashLink to={`/#${t.toLowerCase()}`}
                         key={i}
                         smooth={true}
                         duration={2000}>{t}</NavHashLink>
    })

    return (
        <div className={style.nav}>{navLinks}</div>
    );
}

export default Nav;