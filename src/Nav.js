import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav () {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            handleShow(true);
         } else handleShow(false);        
    });
    return () => {
        window.removeEventListener("scroll");
      };
    }, []);
    

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://static.wikia.nocookie.net/jurassicpark/images/5/54/Netflix_logo.png/revision/latest?cb=20200920162840"
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