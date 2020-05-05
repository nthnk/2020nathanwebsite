import React from 'react'
import "./MusicStyle.css"
import Fade from 'react-reveal/Fade'

function Music() {
    return(
        <div className="music" id="MusicSection">
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <h1 id="musicTitle">My Music</h1>
                </div>
            </div>
            <Fade>
                <div style={{display: "flex", justifyContent: "center", paddingTop: "5%", paddingBottom: "7%"}}>
                    <div style={{width: "50%", display: "flex", justifyContent: "center"}}>  
                        <iframe 
                            src="https://open.spotify.com/embed/artist/0bE8mYX7G7cYUGZdzv9nwJ" 
                            width="500" 
                            height="160" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media"
                            style={{borderRadius: "10px"}}>
                        </iframe>
                    </div>
                    <div style={{width: "50%"}}>
                        <div style={{width: "90%"}}>
                            <p>
                                In my spare time, I like to learn about new technology, workout, and make electronic music.
                                On the left you'll see the two songs I've finished so far. 
                                Check me out on <a id="spotifyLink" href="https://open.spotify.com/artist/0bE8mYX7G7cYUGZdzv9nwJ?si=7jo-WdwYQraMHkLLIMy41w">Spotify</a> to
                                get my latest updates!
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Music