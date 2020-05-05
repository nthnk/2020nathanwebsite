import React from 'react'
import "./titlePageStyling.css"
import Fade from 'react-reveal/Fade'

function TitlepageBody() {
    return(
        <Fade left>
            <div id="titleTextParent">
                <div className="titleText">
                        <h1 id="hello">Hey, I'm Nathan!</h1>
                        <h1 id="welcome">Welcome to my site</h1>
                </div>
            </div>
        </Fade>
    )
}

export default TitlepageBody