import React from "react";
import Header from "./componens/header/Header";
import Home from "./componens/home/Home";
import Skills from "./componens/skills/Skills";
import Contacts from "./componens/contacts/Contacts";
import {Footer} from "./componens/footer/Footer";
import {SkillsSlider} from "./componens/skills/skillsSlider/SkillsSlider";
import About from "./componens/about/About";
import {Projects} from "./componens/projects/Projects";


function App() {
    return (
        <div>
            <Header/>
            <Home/>
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
