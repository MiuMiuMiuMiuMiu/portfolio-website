import React, { useState } from 'react';

function Header(props) {

    const [open, isOpen] = useState(false);

    function toggleMenu() {
        if (open) {
            isOpen(false);
        } else {
            isOpen(true);
        }
    }

    return (
        <div className="header">
            <a className="active" href="#home">Home</a>
            {open
                ?
                <div>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                :
                <div>
                </div>
            }

            <a href="#burgerMenu" className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    );
}

export default Header;