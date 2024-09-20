import React from 'react'
import './style.css'
 import image from './file.png'
 
  import { IconName } from "react-icons/gi";
import { GiFlowerPot } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
 
const SiderBar = () => {
  return (
    <div className='left-container'>  

<div className='Progress-data'>
<div className='heading'><h6>Where your Money Go ?</h6></div>
  <div className='field-container'>
 
 <label style={{fontWeight:'bold', fontSize:'15px', marginLeft:"10px"}} >Food and Drinks:</label><br/>
<progress id ="file" value="32" max="100">32%</progress><br/>
<label  style={{fontWeight:'bold', fontSize:'15px',marginLeft:"10px"}} >Shopping:</label><br/>
<progress id ="file" value="32" max="100">32%</progress><br/>
<label style={{fontWeight:'bold', fontSize:'15px',marginLeft:"10px"}} >Housing:</label><br/>
<progress id ="file" value="32" max="100">32%</progress><br/>
<label style={{fontWeight:'bold', fontSize:'15px',marginLeft:"10px"}} >Transportaion:</label><br/>
<progress id ="file" value="32" max="100">32%</progress><br/>
<label style={{fontWeight:'bold', fontSize:'15px',marginLeft:"10px"}} >Vehicles:</label><br/>
<progress id ="file" value="32" max="100">32%</progress>
</div>


<div className='sideImage-conatiner'>
    <div className='sideImage-icon'><div> <FaBoxOpen  color="#C2D3E4" fontSize={65} /></div><div><GiFlowerPot  color='#C2D3E4' fontSize={85}/></div></div>
        
        
       <div  className='sideImage-conatiner2'>save your money</div>
       <div  className='sideImage-conatiner3'>Lorem ipsum dolor incidunt helloi  incidunt  money </div>

<div> <button className='sideImage-conatiner4'>View Tips</button></div>
    </div>
</div>
</div>
  )
}

export default SiderBar
