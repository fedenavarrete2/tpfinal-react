import React from 'react';
import './header.css';
import { Main } from '../Main';
import { Navbar } from '../Navbar';
import {motion} from 'framer-motion'


const Header = () => {
 return(
 <div className='contenedorHeader'>
    <header>
        <div className="logo">
          <h2 className="logo-1">FEDERICONAVARRETE</h2>
        </div>
        <Navbar className="navbar"/>
    </header>
<div className="hamburguesa" onClick={()=>{
    menu.classList.toggle('miclase')
}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="menuMobile" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
</div>
<ul className="menu" id='menu'>
            <li className="li-nav"><a className="a-nav" href="#inicio">Inicio</a></li>
            <li className="li-nav"><a className="a-nav" href="#sobre-mi">Sobre Mí</a></li>
            <li className="li-nav"><a className="a-nav" href="#servicios">Servicios</a></li>
            <li className="li-nav"><a className="a-nav" href="#mis-trabajos">Mis Trabajos</a></li>
            <li className="li-nav1"><a className="a-nav" href="#contacto">Contacto</a></li>
</ul>
</div>
 )
}

export { Header }