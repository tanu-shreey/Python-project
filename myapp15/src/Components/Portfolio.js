import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { MdArchitecture } from "react-icons/md";
import { Md360 } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import image3 from './assets/image3.svg'
import image4 from './assets/project3.png'
import image5 from './assets/project2.png'
import image6 from './assets/project (1).png'





const Portfolio = () => {
  return (
    <div className='container-fluid ps-5' style={{ backgroundColor: '#222831' }}>
      <div className='row  ' >
        <div className='col-sm-6 ' style={{marginTop:'15%'}} >
          <div className='pt-5 ps-5 ms-5' > <h1 className='display-1 ' style={{ color: '#FFF' }}><strong>CREATIVE UI</strong></h1>


          </div>
          <div>
            <h1 className='display-1 ps-5 ms-5' style={{ color: '#00ADB5' }}> <strong>DESIGNER</strong></h1>
          </div>


          <div className='d-flex flex-row pt-3 ps-5 ms-5' >
            <div className='text-center '>
              <button className='btn text-white ' style={{ backgroundColor: '#00ADB5' }}>Hire me</button>
            </div>
            <div className='text-center ms-3 '>
              <button className='btn text-white ' style={{ backgroundColor: 'rgba(255,255,255,.2' }}>download CV  <i><MdArrowDownward color='grey' size={15} /></i> </button>
            </div>
          </div>

        </div>
        <div className='col-sm-6 ps-5'>
          <img src={image1} className='img-fluid' />
        </div>

      </div>
      <div className='col-sm-10 text-center '>
        <i><MdArrowDownward color='grey' size={35} /></i>
      </div>




      {/*------------------------------------------ About -------------------------------------------------------*/}

      <div className='container-fluid  mb-5 ps-5' id='About' style={{ backgroundColor: '#222831' }} >
        <div className='row text-center'>


          <div className=' col-sm-6 mt-5 '>


            <div className='d-flex flex-row  '>
              <div >
                <h1 className=' text-white  ms-5 ps-5 '>About</h1>
              </div>
              <div>

                <h1 style={{ color: '#00ADB5' }}>me</h1>
              </div>
              <i><MdArchitecture color='#00ADB5' size={35} /></i>
            </div>

            <div className='  col-sm-8 p-5 pt-0 pe-0 text-white text-center'>
              <p>Front-end developers need to know how to use data fetching techniques
                like AJAX and fetch API. AJAX allows for asynchronous data fetching, w
                hich can improve a website's performance. Fetch API is a newer technique
                that can fetch data from multiple sources at once.
              </p>
            </div>
          </div>
          <div className='col-sm-6 pe-5'>
            <img src={image2} className='img-fluid' />
          </div>
        </div>
      </div>





      {/*------------------------------------------ Works -------------------------------------------------------*/}

<div className='container-fluid p-5 mb-5'>

      <div className='container-fluid mb-3 ms-4 ' >
        <div className='d-flex flex-row mt-5 ' >

          <div className='text-white display-6  ms-3 pe-2'>  <strong > MY RECENT</strong>
          </div>
          <div className='display-6' style={{ color: '#00ADB5' }}> <strong> WORKS</strong></div>
        </div>
      </div>
      <div className='d-flex flex-row ms-5 '>

        <div className='text-center  ms-2 '>
          <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>All</button>
        </div>
        <div className='text-center ms-3'>
          <button className='btn text-white' style={{ backgroundColor: 'rgba(255,255,255,.15' }} >UI</button>
        </div>
        <div className='text-center ms-3 '>
          <button className='btn text-white' style={{ backgroundColor: 'rgba(255,255,255,.15' }} >UX</button>
        </div>
        <div className='text-center ms-3 '>
          <button className='btn text-white' style={{ backgroundColor: 'rgba(255,255,255,.15' }} >Web Design</button>
        </div>

      </div>



      <section className='container-fluid '>
        <div class="row justify-content-center ">

          <div className='col-sm-3  m-5  ' style={{ backgroundColor: 'rgba(255,255,255,.15' }}>
            <img src={image4} className='w-100 img-fluid  mt-5' id='image4' />
          </div>

          <div className='col-sm-3  m-5  justify-content-center' style={{ backgroundColor: 'rgba(255,255,255,.15' }}>
            <img src={image5} className='w-100 img-fluid  mt-5' />
          </div>

          <div className='col-sm-3  m-5 justify-content-center' style={{ backgroundColor: 'rgba(255,255,255,.15' }}>
            <img src={image6} className='w-100 img-fluid ' />
          </div>
        </div>

      </section>
      </div>

      {/*------------------------------------------ contact me -------------------------------------------------------*/}


      <div className='container-fluid mt-5 mb-5 ps-5 '  >
        <div className='row justify-content-center'>
          <div className='col-sm-6  '>
            <div className='d-flex flex-row text-center py-4' >

              <div className='text-white display-6  pe-2 ms-5'>  <strong > Contact</strong>
              </div>
              <div className='display-6' style={{ color: '#00ADB5' }}> <strong> me</strong></div>
              <i> <Md360 color='#00ADB5' size={35} /></i>
            </div>
            <div> <img src={image3} className='img-fluid' /></div>

             </div>


          <div className='col-sm-6 mt-5  ' id='Contact' >
            <form className='form-group'>
              <div class="row justify-content-center ">
                <div class="col-sm-4 ">
                  <label for="exampleInputEmail1" className='text-white'>Your Name</label>
                  <input type="text" class="form-control border-0 " placeholder="First name" style={{ backgroundColor: 'rgba(255,255,255,.2' }} />
                </div>
                <div class="col-sm-4 ">
                  <label for="exampleInputEmail1" className='text-white'>Your Email</label>

                  <input type="text" class="form-control border-0 " placeholder="Last name" style={{ backgroundColor: 'rgba(255,255,255,.15' }} />
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="form-group col-sm-8  pt-4">
                  <label className='text-white'>message</label>
                  <textarea class="form-control border-0" placeholder="message" rows='7' style={{ backgroundColor: 'rgba(255,255,255,.2' }} />

                  <div className=' mt-3 '>
                    <button className='btn text-white' style={{ backgroundColor: '#00ADB5' }}>Send Message<i><FaTelegramPlane color='#fff' size={25} /></i></button>
                  </div>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>

      {/*------------------------------------------ footer -------------------------------------------------------*/}


      <div  className='mt-5 ' >
        <h3 className='text-white text-center mt-5'>Tanushree Yadav</h3>

        <div className='d-flex flex-row  mt-3' style={{ marginLeft: '45%' }}>

          <div className=''>
            <i>
              <TiSocialLinkedin color='#00ADB5' size={25} />
            </i>
          </div>

          <div className='ms-3'>
            <i>
              <FaGithub color='#00ADB5' size={25} />
            </i>
          </div>

          <div className='ms-3'>
            <i>
              <SiInstagram color='#00ADB5' size={25} />
            </i>
          </div>
          <div className='text-center ms-3'>
            <i>
              <RiCodeBoxFill color='#00ADB5' size={25} />
            </i>
          </div>

        </div>

        <div className='text-center mt-5'>
          <button className='btn scroll-top'>  
            <i>
            <FaCircleArrowUp color='#FFF' size={25} />
          </i></button>

        </div>
        <div class="copyright pb-0 mb-0 pt-3 text-white text-center">
          Copyright © 2024 All rights reserved | This website is made by Tanushree yadav
        </div>
      </div>
    </div>

  )
}

export default Portfolio