import React, { useState } from 'react'
import { Carousel } from "react-bootstrap";
import img1 from './Images/testimonials/testimonials-1.jpg'
import img2 from './Images/testimonials/testimonials-2.jpg'
import img3 from './Images/testimonials/testimonials-3.jpg'
import img4 from './Images/testimonials/testimonials-4.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
 

const Testimonials = () => {
 const [index,setIndex] = useState(0);
  const handleSelect =(selectedIndex)=>{

    setIndex(selectedIndex);
  };

    return (
        <div className='container-fluid'>
            <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme='dark'>
                <Carousel.Item>
                    <div className='row p-5'>
                        <div className='col-sm-8'>

                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.  Doloribus iste placeat
                                quos perferendis </p>
                            <h4 className='text-center'>Sara Williams</h4>
                            <h6 className='text-center text-secondary'>Designer</h6>
                        </div>
                        <div className='col-sm-2'> <img src={img1} className='rounded-circle img-fluid ' /></div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>


                <div className='row p-5'>
                        <div className='col-sm-8'>

                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.  Doloribus iste placeat
                                quos perferendis </p>
                            <h4 className='text-center'>Sara Williams</h4>
                            <h6 className='text-center text-secondary'>Designer</h6>
                        </div>
                        <div className='col-sm-2'> <img src={img2} className='rounded-circle img-fluid' /></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='row p-5'>
                        <div className='col-sm-8'>

                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.  Doloribus iste placeat
                                quos perferendis </p>
                            <h4 className='text-center'>Sara Williams</h4>
                            <h6 className='text-center text-secondary'>Designer</h6>
                        </div>
                        <div className='col-sm-2'> <img src={img3} className='rounded-circle img-fluid' /></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>

                <div className='row p-5'>
                        <div className='col-sm-8'>

                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.  Doloribus iste placeat
                                quos perferendis </p>
                            <h4 className='text-center'>Sara Williams</h4>
                            <h6 className='text-center text-secondary'>Designer</h6>
                        </div>
                        <div className='col-sm-2'> <img src={img4} className='rounded-circle img-fluid'/></div>
                    </div>
                </Carousel.Item>









            </Carousel>


        </div>
    )
}

export default Testimonials
