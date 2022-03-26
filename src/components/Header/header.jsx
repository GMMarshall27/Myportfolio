import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me1.jpg'
import HeaderSocial from './HeaderSocial'

const header = () => {
    return (
        <header>
            <div className=" container header__container">
                <h5>Hello I'm</h5>
                <h1>Garrett Marshall</h1>
                <h5 className=".text-light">Junior Fullstack Developer</h5>
                <CTA/>
                <HeaderSocial/>

                <div className="me">
                    <img className="img1" src={ME} alt="me"/>
                </div>

                <a href="#Contact" className='scroll__down'>Scroll Down</a>
            </div>
        
        </header>
    )
}

export default header
