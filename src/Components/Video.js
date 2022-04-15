import React from 'react';
import './Video.css';
import { Link } from 'react-router-dom';
import BanVideo from '../assets/images/pexel.gif';
// import BanVideo from '../assets/images/pexels-vd.mp4';




function Video() {
  return (


    <div className='Bg-hero'>
    <video  mute loop id='video'>
        {/* <source src={BanVideo} type='video/mp4' /> */}
        <source src={BanVideo} type='video/gif' />

        {/* <img
        src={process.env.PUBLIC_URL + "/images/pexel.gif"}
        alt="/"
      /> */}



    </video>
    <div className='content'>
        <h1>Bruktawit Wolde</h1>
        <p>React Developer </p>
        <div>
            {/* <Link to='/portfolio' className='btn'>Hire Me</Link> */}
            <Link to='/portfolio' className='btn'>Hire Me</Link>

        </div>
    </div>
</div>
   
  )
}

export default Video;