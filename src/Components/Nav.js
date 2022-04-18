import React, {useState}from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import './Nav.css';


function Nav() {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className="header">
      <Link to="/New-personal">
        <h1> BROOK</h1>
      </Link>
      <ul className={click ? 'menu active' : 'menu'}>
        <li>
          <Link to="/New-personal">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
     
          <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
    </div>
  );
}

export default Nav;
