import React from "react"
import TitlePage from './TitlePage'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Ventures from './Ventures'
import Music from './Music'
import "./AppStyling.css"

function App() {

    return (
        <div className="website">
            <TitlePage/>
            <div id="mainContentParent">
                <div id="mainContentChild">
                    <AboutMe id="about"/>
                    <Skills id="skills"/>
                    <Ventures id="ventures"/>
                    <Music id="music"/>
                </div>
            </div>
            <div className="copyrightParentParent">
                <div id="copyrightParent">
                    <h1 id="copyrightChild">Made by Nathan Koo © 2020</h1>
                </div>
            </div>
        </div>
    )
}

export default App