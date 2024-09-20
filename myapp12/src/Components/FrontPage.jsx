import React from 'react'
import Navbar from './Navbar'
import image1 from './Images/hero-img.png'
import image2 from './Images/about.jpg'
import image3 from './Images/about-2.jpg'
import image4 from './Images/stats-bg.jpg'
import image5 from './Images/reservation.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import Starter from './Starter'
import Testimonials from './Testimonials'
import Parties from './Parties'
import Gallery from './Gallery'
const FrontPage = () => {
    return (
        <div>

            <div className='container-fluid'>
                <Navbar />
            </div>
            <section className='bg-light'>
                <div className='container-fluid  row text-center p-5'>

                    <div className='col-sm-6  '><h1 data-aos="fade-up" class="aos-init aos-animate">Enjoy Your Healthy<br />Delicious Food</h1>
                        <button className='rounded-pill btn ' style={{ backgroundColor: '#ce1212' }}>
                            <a href="#" class="nav-item nav-link" style={{ color: 'white' }} >Book a Table</a></button>
                    </div>

                    <div className='col-sm-5'>
                        <img
                            className='img-fluid animated'
                            src={image1}
                            alt="Animated Image"
                        />
                    </div>

                </div>
            </section>

            <section className='About-container'>
                <div className='container-fluid'>
                    <div>   <span>  <h6 className='bg-gray text-center pt-5'>About us</h6></span>
                        <span><h5 className='bg-gray text-center '> Learn More About us</h5></span></div>

                    <div className='container-fluid row p-5'>
                        <div className='col-sm-7 ' >
                            <img className='img-fluid' src={image2} alt='image' />
                            <div className='container-fluid border border-4  border-Secondary mt-5 text-center'>
                                <h1> Book a Table</h1>
                                <h1 className='text-danger'>+91 985645426</h1>
                            </div>
                        </div>
                        <div className='col-sm-4 ms-5'>

                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Doloremque consequatur atque voluptatibus voluptatem.
                                Assumenda explicabo ex magni natus.
                            </div>
                            <div className='p-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Doloremque consequatur atque voluptatibus voluptatem.

                            </div>
                            <div>

                                Assumenda explicabo ex magni natus.
                            </div>
                            <div className='p-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Doloremque consequatur atque voluptatibus voluptatem.

                            </div>
                            <div className='p-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Doloremque consequatur atque voluptatibus voluptatem.

                            </div>

                            <div><img className='img-fluid' src={image3} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='why-us' className='bg-light ' >
                <div className='container '>
                    <div className='row gy-4'>
                        <div className='col-xl-3'>
                            <div className='why-box p-3' style={{ backgroundColor: '#ce1212', color: 'white' }}>
                                <h3>Why-choose Yummy.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Possimus aspernatur ullam pariatur asperiores
                                    incidunt alias eum suscipit harum.</p>
                                <div className='text-center' ><a href='#' className='more-btn' >learn more</a></div>
                            </div>

                        </div>



                        <div className='col-xl-3'>
                            <div className='icon-box text-center bg-white p-5 mb-5'>
                                <i></i>
                                <h4>corporate office center</h4>
                                <p>  Possimus aspernatur ullam pariatur asperiores
                                    incidunt alias eum suscipit harum</p>
                            </div>


                        </div>

                        <div className='col-xl-3'>
                            <div className='icon-box  text-center bg-white  p-5 mb-5'>
                                <i></i>
                                <h4>corporate office center</h4>
                                <p>  Possimus aspernatur ullam pariatur asperiores
                                    incidunt alias eum suscipit harum</p>
                            </div>


                        </div>


                        <div className='col-xl-3'>
                            <div className='icon-box  text-center bg-white  p-5 mb-5'>
                                <i></i>
                                <h4>corporate office center</h4>
                                <p>  Possimus aspernatur ullam pariatur asperiores
                                    incidunt alias eum suscipit harum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='stats  section bg-dark '  >
                <img className='img-fluid' src={image4} />
                  <div className='container position-relative'>
                <div className='row gy-4' style={{
                    position: 'absolute',bottom:'0',background: 'rgb(0,0,0)', background: 'rgba(0, 0, 0, 0.5)', color: '#f1f1f1'
                   
                }}>
                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100 ">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
                            <p>Clients</p>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">521</span>
                                <p>Projects</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="0" class="purecounter">1453</span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="0" class="purecounter">32</span>
                                <p>Workers</p>
                            </div>
                        </div>
                  

                </div>
                </div>
            </section>



            <section className='our-menu mt-5 ' >
                <h6 className='text-secondary text-center'>OUR MENU</h6>
                <h3 className='text-center'>CHECK OUR  YUMMY MENU</h3>

                <div className='container-fluid m-5'>
                    <ul className='nav nav-tabs '>
                        <li className='nav-item' role='presentation'>
                            <a className='nav-link'>
                                <h4>Starters</h4>
                            </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <a className='nav-link'>
                                <h4>Breakfast</h4>
                            </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <a className='nav-link'>
                                <h4>Lunch</h4>
                            </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <a className='nav-link'>
                                <h4>Dinner</h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='container-fluid'>
                   <Starter/>
                </div>
            </section>
              <section>
                   <div className='container-fluid bg-light'>
                   <h6 className='text-center text-secondary'>TESTIMONIALS</h6>
                   <h4 className='text-center'>WHAT ARE THEY SAYING ABOUT</h4>
                     <Testimonials/>
                   </div>

              </section>

              <section>
                <Parties/>

              </section>

            <section className="Table-Book bg-white ">
                <h6 className='text-secondary text-center'>BOOK A TABLE</h6>
                <h4 className='text-center'>BOOK YOUR STAY WITH US</h4>
                <div className='row  bg-light '>
                        <div className='col-sm-4  '>
                        <img src={image5} className='  img-fluid ' />
                        <form></form>
                        </div>
                        
                  

                </div>
            </section>
          

        </div>
    )
}

export default FrontPage
