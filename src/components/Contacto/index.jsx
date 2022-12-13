import React from 'react';
import './contacto.css'
import {motion} from 'framer-motion'

const Contacto = () => {
 return(
 <div className='contacto' id='contacto'>
   <div className='contacto-uno'>
    <h3 className='h3-contacto'>Mantengámonos en contacto</h3>
    <motion.div animate={{y: 0, background:'rgb(1, 97, 161)', color:'#f3f3f3'}} transition={{duration:0.5}} whileHover={{y: -5, background:'#f3f3f3', color:'rgb(1, 97, 161)'}} className='contactame-uno'>
     <i className="bi bi-geo-alt"></i>
     <p className='p-contacto'>Córdoba, Argentina.</p>
    </motion.div>
    <motion.div animate={{y: 0, background:'rgb(1, 97, 161)'}} transition={{duration:0.5}} whileHover={{y: -5, background:'#f3f3f3', color:'rgb(1, 97, 161)'}}  className='contactame-dos'>
    <i className="bi bi-envelope"></i>
     <p className='p-contacto2'>fedenavarrete02@gmail.com</p>
    </motion.div>
    <motion.div animate={{y: 0, background:'rgb(1, 97, 161)'}} transition={{duration:0.5}} whileHover={{y: -5, background:'#f3f3f3', color:'rgb(1, 97, 161)'}} className='contactame-tres'>
    <i class="bi bi-whatsapp"></i>
     <p className='p-contacto3'>+54-9-351-6294144</p>
</motion.div>
   </div>
   <div className='formulario'>
    <h3 className='h3-contacto2'>Cuéntame sobre tu proyecto:</h3>
   <div className='formulario-dos'>
    <form action="">
          <input type="text" placeholder='Tu nombre completo'/>
          <input type="text" placeholder='Tu email'/>
          <textarea type="mensaje" placeholder='Tu mensaje'></textarea>
    <a href="" className='a-btn'>
    <motion.button animate={{y: 0, background:'#f3f3f3'}} transition={{duration:0.3}} whileHover={{y: -5, background:'rgb(1, 97, 161)', color:'#f3f3f3'}}   className='btn-contacto'>Enviar Mensaje</motion.button>
    </a>
    </form>
   </div>
   </div>
 </div>
 )
}

export { Contacto }