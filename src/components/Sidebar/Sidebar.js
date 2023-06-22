import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="logotitle" />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4d'/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4d'/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-page">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'/>
                </NavLink> 
            </nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/rahul-biswal/"  target='blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>    
                </a></li>

                <li><a href="https://www.linkedin.com/in/rahul-biswal/"  target='blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>    
                </a></li>

                <li><a href="https://www.linkedin.com/in/rahul-biswal/"  target='blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>    
                </a></li>
            </ul>
        </div>
        )
    }

export default Sidebar
