import React from "react";
import "./App.module.css"
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {SkillsSlider} from "./skills/skills-slider/SkillsSlider";
import About from "./about/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SkillsSlider/>
            <Projects/>
            <Skills/>
            <About />
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
