import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from './Images/menu/menu-item-1.png'
import img2 from './Images/menu/menu-item-2.png'
import img3 from './Images/menu/menu-item-3.png'
import img4 from './Images/menu/menu-item-4.png'
import img5 from './Images/menu/menu-item-5.png'
import img6 from './Images/menu/menu-item-6.png'


const Starter = () => {
  return (
    <div>
      <h6 className='text-center text-secondary'>Menu</h6>
      <h4 className='text-center'>STATERS</h4>
      <div className='row gy-4'>
        <div className='col-lg-4  text-center p-5'>
          <img src={img1} className='img-fluid' />
          <h4>Eos Luibusdam</h4>
          <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
        </div>
        <div className='col-lg-4 text-center p-5'>
          <img src={img2} className='img-fluid' />
          <h4>Eos Luibusdam</h4>
          <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
        </div> <div className='col-lg-4 text-center p-5'>
          <img src={img3} className='img-fluid' />
          <h4>Eos Luibusdam</h4>
          <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
        </div> <div className='col-lg-4 text-center p-5'>
          <img src={img4} className='img-fluid' />
          <h4>Eos Luibusdam</h4>
          <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
        </div>
        <div className='col-lg-4 text-center p-5'>
          <img src={img5} className='img-fluid' />
          <h4>Eos Luibusdam</h4>
          <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
        </div> <div className='col-lg-4 text-center p-5'>
          <img src={img6} className='img-fluid' />
          <h4>Eos Luibusdam</h4>
          <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
        </div>
      </div>
    </div>
  )
}

export default Starter
