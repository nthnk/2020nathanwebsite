import React from 'react'
import "./AboutMeStyle.css"
import mePicture from "./titlePageFolder/mePicture.jpg"
import Fade from 'react-reveal/Fade'

function AboutMe() {
    return (
        <div className="AboutMe" id="AboutMeSection">
            <Fade>
                <div id="aboutmeSectionChild">
                    <div id="aboutmeTitleParent">
                        <h1 id="aboutmeTitle">About Me</h1>
                    </div>
                    <div id="aboutmeDesc">
                        <div id="mePictureParent">
                            <img src={mePicture} id="mePicture" alt="Self-Portrait"/>
                        </div>
                        <div id="aboutmeDescParent">
                            <p id="aboutmeDescChild">
                                I'm a student at the University of Waterloo who recently studied Public Health. Upon discovering
                                my passion for technology and entrepreneurship, I switched majors to Management Engineering and am
                                looking forward to working as a developer and future product manager! Aside from work I enjoy a 
                                balanced life which includes weightlifting, cooking, spending time with family and friends, and 
                                learning about new technologies. I'm also an avid member of the entrepreneurship community; I've
                                pitched and worked on 3 different venture ideas so far. Click the 'Ventures' tab in the above toolbar
                                or scroll down to learn more about my work.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            <div id="aboutmeLineParent">
                <hr id="aboutmeLine"/>
            </div>
        </div>
        
    )
}

export default AboutMe