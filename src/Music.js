import React from 'react'
import "./MusicStyle.css"
import Fade from 'react-reveal/Fade'

function Music() {
    return(
        <div className="music" id="MusicSection">
            <div id="musicTitleParent">
                <div>
                    <h1 id="musicTitleChild">My Music</h1>
                </div>
            </div>
            <Fade>
                <div className="musicContent">
                    <div id="spotifyRadioParent">  
                        <iframe 
                            id="spotifyRadioChild"
                            src="https://open.spotify.com/embed/artist/0bE8mYX7G7cYUGZdzv9nwJ" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media">
                        </iframe>
                    </div>
                    <div className="musicDesc">
                        <div id="musicDescParent">
                            <p id="musicDescChild">
                                In my spare time, I like to learn about new technology, workout, and make EDM.
                                Here are the two songs I've finished so far. 
                                Check me out on <a id="spotifyLink" target="_blank" href="https://open.spotify.com/artist/0bE8mYX7G7cYUGZdzv9nwJ?si=P-22J1JYTWCE4XrdIC5MOA">Spotify</a> to
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