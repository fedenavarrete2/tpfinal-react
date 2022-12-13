import React from 'react';
import './services.css'
import {motion} from 'framer-motion'

const Servicios = () => {
 return(
 <div className='Services' id='servicios'>
    <h2 className='h2-services'>Mis Servicios</h2>
    <section className='caja-contenedor'>
        <div className='contenedor-uno'> 
        <motion.div animate={{rotateZ:-8, y:0, background:'#AEC7FF', color:'#000'}} transition={{duration:0.5}} whileHover={{rotateZ: 0, y:-40, background:'#2D6EFF', color:'#f3f3f3'}}className='caja-uno'>
           <h3 className='h3-services'>UI/UX Design</h3>
           <p className='p-services'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis expedita minus magnam laboriosam corrupti a optio, qui rerum. Hic quas veritatis nisi minus </p>
        </motion.div>
        </div>
        <div className='contenedor-dos'>
        <motion.div animate={{rotateZ:8, y:0, background:'#AEC7FF'}} transition={{duration:0.5}} whileHover={{rotateZ: 0, y:-40, background:'#2D6EFF', color:'#f3f3f3'}}  className='caja-dos'>
           <h3 className='h3-services'>Desarrollo WEB</h3>
           <p className='p-services'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis expedita minus magnam laboriosam corrupti a optio, qui rerum. Hic quas veritatis nisi minus</p>
        </motion.div>
        </div>
        <div className='contenedor-tres'>
        <motion.div animate={{rotateZ:-8, y:0, background:'#AEC7FF'}} transition={{duration:0.5}} whileHover={{rotateZ: 0, y:-40, background:'#2D6EFF', color:'#f3f3f3'}}  className='caja-tres'>
           <h3 className='h3-services'>Estrategia SEO</h3>
           <p className='p-services'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis expedita minus magnam laboriosam corrupti a optio, qui rerum. Hic quas veritatis nisi minus</p>
        </motion.div>
        </div>
    </section>
 </div>
 )
}

export { Servicios }