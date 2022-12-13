import React from 'react';
import { Inicio } from '../Inicio';
import { AboutMe } from '../AboutMe';
import { Servicios } from '../Servicios';
import { Contacto } from '../Contacto';
import { Trabajos } from '../Trabajos';



const Main = () => {
 return(
 <div className='main'>
  <Inicio/>
  <AboutMe/>
  <Servicios/>
  <Trabajos/>
  <Contacto/>
</div>
 )
}

export { Main }