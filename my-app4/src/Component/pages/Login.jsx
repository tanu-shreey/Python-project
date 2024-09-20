import React from 'react'
import './Style2.css'


 export const Login = () => {
  return (
    <>
     <div className='Data-Container2'>
     
      <div className='Login-inner-container' >
        <div className='Login-Heading'><h4>Login Page</h4></div>
         <div className='Login-Form'>

             <form className=''>
               <label>Email Address :</label><br/>
               <input   class="form-control" type='text' placeholder='Email@.com'/><br/>
               <label>Password :</label><br/>
               <input   class="form-control" type='text' placeholder='@#$%&145'/><br/>
               <button>Login</button>
             </form>

         </div>

      </div>
      
    </div>
   
   
    </>
  );
}

export default Login
