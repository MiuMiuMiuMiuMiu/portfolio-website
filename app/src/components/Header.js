import React, { useState, useEffect } from 'react';

function Header() {

    const [width, setWidth] = useState(window.innerWidth); //Set state of screen
    const [open, isOpen] = useState(false); //Set state of hamburger menu, default is closed

    function toggleNav() {
        /* Toggle hamburger menu */
        if (open) {
            isOpen(false);
        } else {
            isOpen(true);
        }
    }

    const updateWidth = () => {
        /* Update/set width of screen */
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        /* Set screen width if window size changes */
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="header">
            <a href="#home">Home</a>
            {/* If NOT mobile, display nav */}
            {width >= 720
                ?
                    <div className="navigation">
                        <a href="#about-me">About me</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                :
                <>
                    <a href="#burgerMenu" className="burger-menu float-right" onClick={toggleNav}>
                        <i className="fa fa-bars"></i>
                    </a>
                    {/* If  width is not > or = 720 and hamburger menu is open, display nav */}
                    {open &&
                        <div className="navigation">
                            <a href="#skills">About me</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                    }
                </>
            }
        </div>
    );
}

export default Header;