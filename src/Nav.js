import React from 'react'
import "./Nav.css";

function Nav () {
    return(
        <div className="nav">
            <img
                className="nav__logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav