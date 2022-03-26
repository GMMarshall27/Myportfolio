import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo"> Garrett Marshall</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__copyright">
                <small>&copy; All rights reserved.</small>
            </div>

        </footer>
    )
}

export default footer
