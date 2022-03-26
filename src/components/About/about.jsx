import React from 'react'
import './about.css'
import ME from '../../assests/ashandi.jpg'
import {FaAward} from 'react-icons/fa'

const about = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">

                    <div className="about__me-image">

                        <img src={ME} alt="ashandi"/>

                    </div>
                </div>

                <div className="about__content">
                        <div className="about__cards">
                           <article className="about__card">
                                <FaAward className='about__icon'/>
                               <h5>Experience</h5>
                               <small>New to Fullstack Development</small>
                            </article> 
                        </div>
                        <p>
                           Hi I'm Garrett! I am a proud 2x dog dad, avid video gamer, and a potato chip connoisseur. As a recent graduate from the Georgia Tech Full Stack Coding Bootcamp, I'm looking for an opportunity to start my software engineering career. If you think I might be a good fit, send me a message! I'd be happy to put my skills to the test. 

                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
