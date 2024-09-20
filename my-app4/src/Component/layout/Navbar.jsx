import React from 'react'
 import  style from './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import  Chart from '../pages/Chart'
 import image from './image.png'
import { NavLink } from 'react-router-dom';



 export const Navbar = () => {
  return (
      <>    
    
    <div className='sidebar' role='cdb-sidebar'>
      <div className='sidbar-container  ' >
        <div className='sidebar-header'  >
          <div className='sidebar-brand' >
            <img style={{width:'65px', marginBottom:'30px'}} src={image}/>
            <div style={{color:'white', marginBottom:'30px', fontWeight:'bold' }}>
            <h5>Samantha</h5>
            contact@gamil.com
            </div>
          
          </div>
          <div className='sidebar-nav'>
            <div className='sidenav' style={{textAlign:'center', marginRight:'20px'}}>
              <a   className='sidebar-item'>
                <div className='sidebar-item-content ' style={{margin:'13px', fontSize:'17px' , fontWeight:'bold',padding:'7px' }} >
                
               <NavLink to='/Dashboard'  style={{textDecorationColor:'black', color:'white'}}>Dashboard</NavLink>


                </div>
              </a>

              <a  className='sidebar-item'>
                <div className='sidebar-item-content' style={{margin:'13px', fontSize:'17px',fontWeight:'bold', padding:'7px'}}>
                
                <NavLink to='/Expense' style={{textDecorationColor:'black', color:'white' }}>Expense</NavLink>


                </div>
              </a>

              <a className='sidebar-item'>
                <div className='sidebar-item-content' style={{margin:'13px', fontSize:'17px',fontWeight:'bold', padding:'7px'}}>
                
                <NavLink to='/Wallets' style={{textDecorationColor:'black', color:'white' }}>Wallets</NavLink>


                </div>

              </a>
              <a className='sidebar-item'>
                <div className='sidebar-item-content' style={{margin:'13px', fontSize:'17px',fontWeight:'bold', padding:'7px'}}>
            
                <NavLink to='/Summary' style={{textDecorationColor:'black', color:'white'} }>Summary</NavLink>

                </div>
              </a>

              <a   className='sidebar-item'>
                <div className='sidebar-item-content' style={{margin:'13px', fontSize:'17px',fontWeight:'bold', padding:'7px' }}>
                
              
                <NavLink to='/Login' style={{textDecorationColor:'black', color:'white' }}>Account</NavLink>

                </div>
              </a>


              <a  className='sidebar-item'>
                <div className='sidebar-item-content'  style={{margin:'13px', fontSize:'17px',fontWeight:'bold', padding:'7px'}}>
                
                <NavLink to='/Setting' style={{textDecorationColor:'black', color:'white' }}>Settings</NavLink>

                </div>
              </a>

            </div>

          </div>
          
        </div>

      </div>
    </div>
  

  
    </>
  
  );
 
}

export default Navbar;
