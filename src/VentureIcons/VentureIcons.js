import React from 'react'
import sustainthegrainLogo from './sustainthegrainLogo.png'
import sortrightLogo from './sortrightLogo.png'
import greenbricksLogo from './greenbricksLogo.png'
import "./VentureIcons.css"
import Fade from 'react-reveal/Fade'

function VentureIcons () {
    return (
        <div className="VentureIcons">
            {/*For STG! and SortRight*/}
            <Fade>
                <div className="firstRow">
                    {/*For GreenBricks*/}
                    <div className="gbParent">
                        <div className="gbChild">
                            <div id="gbLogoParent">
                                <img id="gbLogoChild" src={greenbricksLogo} alt="GreenBricks Logo"/>
                            </div>
                            <h1 id="gbTitle">GreenBricks - Current</h1>
                            <p id="gbDesc">90% of recycled plastics aren't reused, ending up in our
                            landfills. We want to give them a use by remolding them
                            into strong, affordable, sustainable, and eco-friendly
                            house-building materials. 
                            Check out our virtual pitch <a href="https://www.youtube.com/watch?v=zhMvVSx2z3w&list=PLKRwhVDGqBVnaJndStsuemzQaEUfoOos0&index=7&t=0s">here.</a>
                            </p>
                        </div>
                    </div>
                    {/*For SortRight*/}
                    <div className="srParent">
                        <div className="srChild">
                            <div id="srLogoParent">
                                <img id="srLogoChild" src={sortrightLogo} alt="SortRight Logo"/>
                            </div>
                            <h1 id="srTitle">SortRight</h1>
                            <p id="srDesc">Our landfills are filled with useful, recyclable
                            materials because of recycling contamination. Most companies
                            send bags of recycling with over 80% contamination to the
                            landfills. Checkout our pitch for an AI waste sorting 
                            software <a href="https://www.youtube.com/watch?v=S4-3BI5qoqE">here.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                {/*For Sustain the Grain!*/}
                <div className="stgParent">
                    <div className="stgChild">
                        <div id="stgLogoParent">
                            <img id="stgLogoChild" src={sustainthegrainLogo} alt="Sustain the Grain! Logo"/>
                        </div>
                        <h1 id="strTitle">Sustain the Grain!</h1>
                        <p id="stgDesc">Responsible meat consumption is important to me. 
                        Not only is meat unsustainable, it's unhealthy and 
                        not eco-friendly! 'Sustain the Grain!' looks to provide a plant/animal-based
                        hybrid restaurant that helped others transition to
                        plant-based lifestyles.</p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default VentureIcons