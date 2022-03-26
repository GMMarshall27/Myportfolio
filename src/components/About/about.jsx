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
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facilis doloremque nemo corrupti distinctio odit minus voluptatum vel, commodi eveniet, rerum voluptatibus itaque. Debitis, facere perferendis vero itaque inventore quia? 
                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
