import React from 'react'
import ToolBar from './titlePageFolder/ToolBar'
import TitlepageBody from './titlePageFolder/TitlepageBody'
import "./TitlePageStyle.css"

function TitlePage() {
    return(
        <div className="TitlePage">
            <div>
                <ToolBar/>
            </div>
            <div className="TitlepageBody">
                <TitlepageBody/>
            </div>
        </div>
    )
}

export default TitlePage 