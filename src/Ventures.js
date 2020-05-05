import React from 'react'
import VentureIcons from "./VentureIcons/VentureIcons"
import "./VenturesStyle.css"

function Ventures() {
    return (
        <div id="VenturesSection">
            <div style={{display: "flex", justifyContent: "center", paddingBottom: "3%"}}>
                <div>
                    <h1 id="venturesTitle">Ventures</h1>
                </div>
            </div>
            <VentureIcons/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <hr id="venturesLine"/>
            </div>
        </div>
    )
}

export default Ventures