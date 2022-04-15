import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    
       <div className='portfolio'>
            <div className='card-container'>
                <div className='card'>
                    <h3>Evet-Landing</h3>
                    {/* <img src={process.env.PUBLIC_URL + "/images/magic8ball_1.png"}alt="" /> */}
                    
                    <a target="/" class="btn" href="https://github.com/TechIsMe/event-landing-page">GitHub</a> 

                </div>
                <div className='card'>
                    <h3>Personal Project</h3>
                    <img src={process.env.PUBLIC_URL + "/images/Services-c.jpg"}alt="" />


                    <a target="/" class="btn" href="http://localhost:3001/">Live Site</a> 

                    
                </div>
                <div className='card'>
                    <h3>Magic 8 Ball</h3>
                    {/* <img src={process.env.PUBLIC_URL + "/images/magic8ball_1.png"}alt="" /> */}

                    <iframe src='https://techisme.github.io/MAGIC-8/' title="8Ball" />
                    <a target="/" class="btn" href="https://techisme.github.io/MAGIC-8/">Live Site</a>

                    
                </div>
                <div className='card'>
                    <h3>Challenge5</h3>
                    {/* <img src={process.env.PUBLIC_URL + "/images/magic8ball_1.png"}alt="" /> */}

                    <iframe src='' title="Cha5" />
                    <a target="/" class="btn" href="https://github.com/TechIsMe/myform">GitHub</a>

                    
                </div>
            </div>
        </div>

    
  )
}

export default Portfolio;