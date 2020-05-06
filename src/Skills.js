import React from 'react'
import SkillIcons from './skillIcons/SkillIcons'
import "./SkillsStyle.css"

function Skills() {
    return(
        <div id="SkillsSection">
            <div className="skillsTitleParent">
                <div>
                    <h1 id="skillsTitleChild">Technologies</h1>
                </div>
            </div>
            <SkillIcons/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <hr id="skillsLine"/>
            </div>
        </div>
    )
}

export default Skills