import React from 'react';
import Nav from '../Components/Nav';
import './About.css';

function About() {
  return (
    <div>
        <Nav />


    <div className="profile" >
      <div className="p1">
        <div>
        <img src={process.env.PUBLIC_URL + "/images/mePrp.png"}alt="" />

      </div>
      
      <div class="discription">
        <h3> About Me</h3>
        <p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the  used as a placeholder before the final copy is</p>
      </div>
      
    </div>
    </div>
    </div>
  )
}



export default About;




// import React from 'react'

// function About() {
//   return (
//     <div>
//         <div className='logo'>

//             <h3> hi there </h3>

//      <img src={process.env.PUBLIC_URL + "/Untitled.png"}
// alt="" /> 
//     </div> 

//     </div>
//   )
// }

// export default About;