import React from 'react';
import './mis-trabajos.css'
import Trabajo from '../../assets/trabajo.jpg'
import Trabajo2 from '../../assets/trabajo2.jpg'
import Trabajo3 from '../../assets/trabajo3.jpg'
import Trabajo4 from '../../assets/trabajo4.jpg'


const Trabajos = () => {
 return(
 <div className='mis-trabajos' id='mis-trabajos'>
    <h2 className='h2-trabajos'>Mis Trabajos</h2>
     <p className='p-trabajos'>Aquí puedes visualizar algunos de mis trabajos mas recientes como desarrollador web.</p>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ Trabajo} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={ Trabajo2 } class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={ Trabajo3 } class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='galeria'></div>
    <div class="col">
        <div><img id='imagen1' onClick={()=>{
           imagen1.classList.toggle('focus')
        } } className='image' src={ Trabajo } alt="" />
        </div>
        <div><img id='imagen2' onClick={()=>{
           imagen2.classList.toggle('focus')
        } } className='image' src={ Trabajo2 } alt="" /></div>
        <div><img id='imagen3' onClick={()=>{
           imagen2.classList.toggle('focus')
        } } className='image' src={ Trabajo3 } alt="" /></div>
        <div><img id='imagen4' onClick={()=>{
           imagen4.classList.toggle('focus')
        }  } className='image' src={ Trabajo4 } alt="" /></div>
        </div>
 </div>
 )
}

export { Trabajos }