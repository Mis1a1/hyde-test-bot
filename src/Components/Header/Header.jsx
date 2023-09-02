
import React from 'react'
import {Link} from 'react-scroll';

import './Header.css';
function  Header() {
     
        return (
            <div className='header'>
            <div className='link-container'>
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
            <li className='li'><Link activeClass="active" to="home" spy={true} smooth={true}>Вакс</Link></li>
            <li className='li'><Link  to="about" spy={true} smooth={true}>Шишки</Link></li>
            <li className='li'><Link  to="contact" spy={true} smooth={true}>Аксессуары</Link></li>
            <li className='li'><Link  to="service" spy={true} smooth={true}>Опт</Link></li>
              </ul>
              </div>
              </div>
        )
    }


export default Header;