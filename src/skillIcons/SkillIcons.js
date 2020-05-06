import React from 'react'
import jsLogo from './jsLogo.png'
import htmlLogo from './htmlLogo.png'
import cssLogo from './cssLogo.png'
import reactLogo from './reactLogo.png'
import mongoDBLogo from './mongoDBLogo.png'
import expressjsLogo from './expressjsLogo.png'
import gitLogo from './gitLogo.png'
import "./SkillIcons.css"
import Fade from 'react-reveal/Fade'

function SkillIcons() {
    return (
        <div className="SkillIcons">
            <Fade>
                <div className="masterFirstRow">
                    <div className="firstRowSkills">
                        <div id="jsIcon" style={{width: "100%"}}>
                            <div id="jsLogoParent">
                                <img id="jsLogoChild" src={jsLogo} alt="JavaScript Logo"/>
                            </div>
                            <div id="jsTitleParent">
                                <h1 id="jsTitleChild">JavaScript</h1>
                            </div>
                        </div>
                        <div id="htmlIcon" style={{width: "100%"}}>
                            <div id="htmlLogoParent">
                                <img id="htmlLogoChild" src={htmlLogo} alt="HTML Logo"/>
                            </div>
                            <div id="htmlTitleParent">
                                <h1 id="htmlTitleChild">HTML</h1>
                            </div>
                        </div>
                        <div id="cssIcon" style={{width: "100%"}}>
                            <div id="cssLogoParent">
                                <img id="cssLogoChild" src={cssLogo} alt="CSS Logo"/>
                            </div>
                            <div id="cssTitleParent">
                                <h1 id="cssTitleChild">CSS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                <div className="masterSecondRow">
                    <div className="secondRowSkills">
                        <div className="reactIcon">
                            <div id="reactLogoParent">
                                <img id="reactLogoChild" src={reactLogo} alt="React Logo"/>
                            </div>
                            <div id="reactTitleParent">
                                <h1 id="reactTitleChild">React</h1>
                            </div>
                        </div>
                        <div className="gitIcon">
                            <div id="gitLogoParent">
                                <img id="gitLogoChild" src={gitLogo} alt="React Logo"/>
                            </div>
                            <div id="gitTitleParent">
                                <h1 id="gitTitleChild">Git</h1>
                            </div>
                        </div>
                        <div className="expressIcon">
                            <div id="expressLogoParent">
                                <img id="expressLogoChild" src={expressjsLogo} alt="ExpressJS Logo"/>
                            </div>
                            <div id="expressTitleParent">
                                <h1 id="expressTitleChild">Express.js</h1>
                            </div>
                        </div>
                        <div className="mongoIcon">
                            <div id="mongoLogoParent">
                                <img id="mongoLogoChild" src={mongoDBLogo} alt="MongoDB Logo"/>
                            </div>
                            <div id="mongoTitleParent">
                                <h1 id="mongoTitleChild">MongoDB</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default SkillIcons