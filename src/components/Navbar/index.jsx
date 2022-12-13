import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import {motion} from 'framer-motion'

const Navbar = () => {
 return(
<div className='navbar'>
    <nav>
        <li className="li-nav"><a className="a-nav" href='#inicio'>Inicio</a></li>
        <li className="li-nav"><a className="a-nav" href='#sobre-mi'>Sobre Mí</a></li>
        <li className="li-nav"><a className="a-nav" href='#servicios'>Servicios</a></li>
        <li className="li-nav"><a className="a-nav" href='#mis-trabajos'>Mis Trabajos</a></li>
        <li className="li-nav1"><a className="a-nav" href='#contacto'>Contacto</a></li>
    </nav>
</div>
 )
}

export { Navbar }