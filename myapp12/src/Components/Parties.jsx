import React from 'react'
import { Carousel } from "react-bootstrap";
import img1 from './Images/Events/events-1.jpg'
import img2 from './Images/Events/events-2.jpg'
import img3 from './Images/Events/events-3.jpg'
import img4 from './Images/Events/events-4.jpg'

const Parties = () => {
    return (
        <div className='container-fluid'>

            <Carousel data-bs-theme='dark'>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-sm-4'><img className='img-fluid' src={img1} /> 
                        
                        </div>
                        <div className='col-sm-4'><img className='img-fluid' src={img2} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img3} /></div>
                    </div>

                   

                </Carousel.Item>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-sm-4'><img className='img-fluid' src={img2} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img3} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img4} /></div>
                    </div>

                   
                </Carousel.Item>
                <Carousel.Item>
                <div className='row'>
                        <div className='col-sm-4'><img className='img-fluid' src={img3} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img4} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img1} /></div>
                    </div>
                  

                </Carousel.Item>      
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-sm-4'><img className='img-fluid' src={img3} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img4} /></div>
                        <div className='col-sm-4'><img className='img-fluid' src={img1} /></div>
                    </div>

                   
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Parties
