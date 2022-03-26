import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {FcAbout} from 'react-icons/fc';
import {BsBook} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNave] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNave('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNave('#about')} className={activeNav === '#about' ? 'active' : ''} ><FcAbout/></a>
            <a href="#experience" onClick={() => setActiveNave('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
            <a href="#contact" onClick={() => setActiveNave('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
        </nav>
    )
}

export default Nav
