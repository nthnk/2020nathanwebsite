import React from "react"
import "./ToolBar.css"
import Reveal from 'react-reveal/Reveal'
import resume from "./resume.pdf"

class ToolBar extends React.Component {
    constructor() {
        super()
        this.state = {
            currentValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        window.scrollTo({
            top: document.getElementById(event.target.getAttribute('value')).offsetTop - 100,
            behavior: 'smooth'
        })
        event.preventDefault()
    }
    render() {
        return (
            <Reveal>
                <div className="ToolBar">
                    <div id="toolbarNameParentParent">
                        <div className="toolbarNameParent">
                            <p id="toolbarName">Nathan Koo</p>
                        </div>
                    </div>
                    <div className="ToolbarSections">
                        <div id="aboutButton" style={{width: "100%"}}>
                            <h1 onClick={this.handleChange} value="AboutMeSection">About</h1>
                        </div>
                        <div id="skillsButton" style={{width: "100%"}}>
                            <h1 onClick={this.handleChange} value="SkillsSection">Skills</h1>
                        </div>
                        <div id="venturesButton" style={{width: "100%"}}>
                            <h1 onClick={this.handleChange} value="VenturesSection">Ventures</h1>
                        </div>
                        <div id="musicButton" style={{width: "100%"}}>
                            <h1 onClick={this.handleChange} value="MusicSection">Music</h1>
                        </div>
                        <div id="resumeButton" style={{width: "100%"}}>
                            <a style={{textDecoration: 'none'}} href={resume} target="_blank"><h1>Resumé</h1></a>
                        </div>
                    </div>
                </div>
            </Reveal>
        )
    }
}

export default ToolBar