import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from './Components/Images/o-mark.png'
import image2 from './Components/Images/symbolize-x-png-clipart.jpg'
const TicTacToe = () => {
  return (
  <div className='container  bg-dark'>
  <div className='Board ' >
  <div className='row1 d-flex flex-row ' style={{color:'white'}}>
  <div className='boxes' style={{width:'180px' , height:'180px',color:'#1f3540', borderRadius:'12px', borderColor:'White'}}  ></div>
  <div className='boxes' style={{width:'180px' , height:'180px',color:'#1f3540'}}></div>
  <div className='boxes'style={{width:'180px' , height:'180px',color:'#1f3540'}}></div>
  </div>
  <div className='row1 d-flex flex-row'>
  <div className='boxes'style={{width:'180px' , height:'180px',color:'#1f3540', borderRadius:'12px'}}>H</div>
  <div className='boxes'style={{width:'180px' , height:'180px',color:'#1f3540', borderRadius:'12px'}}>H</div>
  <div className='boxes'style={{width:'180px' , height:'180px',color:'#1f3540', borderRadius:'12px'}}>H</div>
  </div>
  <div className='row1 d-flex flex-row'>
  <div className='boxes'style={{width:'180px' , height:'180px', color:'#1f3540', borderRadius:'12px'}}>H</div>
  <div className='boxes'style={{width:'180px' , height:'180px',color:'#1f3540', borderRadius:'12px'}}>H</div>
  <div className='boxes'style={{width:'180px' , height:'180px',color:'#1f3540', borderRadius:'12px'}}>H</div>
  </div>
      </div>
      <div><button className='btn' style={{color:'#1f3540', borderRadius:'25px'}}>Reset</button></div>
    </div>
  )
}

export default TicTacToe