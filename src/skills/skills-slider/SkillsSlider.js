import React from 'react';
import Marquee from "react-fast-marquee";
import {SiJavascript, SiTypescript, SiHtml5, SiCss3} from "react-icons/si";


export const SkillsSlider = () => {


    return (
        <div  style={{backgroundColor: "red"}}>
            <div >
                <div>
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        <div>
                            <SiJavascript/>
                            <h3 style={{color: "red"}}>
                                {"javascript"}
                            </h3>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

