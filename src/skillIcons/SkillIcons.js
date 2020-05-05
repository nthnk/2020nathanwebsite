import React from 'react'
import jsLogo from './jsLogo.png'
import htmlLogo from './htmlLogo.png'
import cssLogo from './cssLogo.png'
import reactLogo from './reactLogo.png'
import mongoDBLogo from './mongoDBLogo.png'
import expressjsLogo from './expressjsLogo.png'
import "./SkillIcons.css"
import Fade from 'react-reveal/Fade'

function SkillIcons() {
    return (
        <div className="SkillIcons">
            <Fade>
                <div id="firstRowSkills" style={{display: "flex", justifyContent: "center", paddingTop: "3%"}}>
                    <div id="jsIcon" style={{width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={jsLogo} id="jsLogo" height="auto" width="auto" alt="JavaScript Logo"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1>JavaScript</h1>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={htmlLogo} id="htmlLogo" height="auto" width="auto" alt="HTML Logo"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1>HTML</h1>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={cssLogo} id="cssLogo" height="auto" width="auto" alt="CSS Logo"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1>CSS</h1>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                <div style={{display: "flex", justifyContent: "center", paddingTop: "3%"}}>
                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={reactLogo} id="reactLogo" height="auto" width="auto" alt="React Logo"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1>React</h1>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={expressjsLogo} id="expressjsLogo" height="auto" width="auto" alt="ExpressJS Logo"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1>Express.js</h1>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={mongoDBLogo} id="mongoDBLogo" height="auto" width="auto" alt="MongoDB Logo"/>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1>MongoDB</h1>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default SkillIcons