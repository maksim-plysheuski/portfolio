import React from "react";
import "./App.module.css"
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import {Footer} from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

/*
<Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="about" element={ <About/> } />
    <Route path="contact" element={ <Contact/> } />
</Routes>*/


/*<Header/>
<Main/>
<Skills/>
<Projects/>
<Contacts/>
<Footer/>*/
