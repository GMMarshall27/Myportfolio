import React from 'react'
import  './portfolio.css'
import IMG1 from '../../assests/pantry2.jpg'
import IMG2 from '../../assests/budget1.png'
import IMG3 from '../../assests/weather.png'
import IMG4 from '../../assests/quiz.png'

const portfolio = () => {
    return (
        <section id="portfolio">
            <h5> My Recent Work </h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image"> 
                        <img src={IMG1} alt="pantryphoto"/>
                    </div>
                    <h3> Pantry Meal Plannerz </h3>
                    <a href="https://lfewell.github.io/pantry-meal-plannerz/" className="btn btn-primary" target='_blank'>Live Demo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"> 
                        <img src={IMG2} alt="budgetphoto"/>
                    </div>
                    <h3> Budget Tracker </h3>
                    <a href="https://stark-retreat-03566.herokuapp.com/" className="btn btn-primary" target='_blank'>Live Demo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"> 
                        <img src={IMG3} alt="weatehrphoto"/>
                    </div>
                    <h3> 5-Day Weather Forecast </h3>
                    <a href="https://gmmarshall27.github.io/06-HW-Weather-Dashboard/" className="btn btn-primary" target='_blank'>Live Demo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"> 
                        <img src={IMG4} alt="quizphoto"/>
                    </div>
                    <h3> Code Quiz </h3>
                    <a href="https://gmmarshall27.github.io/04-HW-Code-Quiz/" className="btn btn-primary" target='_blank'>Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default portfolio
