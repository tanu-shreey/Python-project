import React from "react";
import Registration from './Registration.js';


const App = () => {
   return (
      <>
         <div className="container">

            <div className="form-container">
               <h1 >Registration Form</h1>
               <form id='myFrom' onSubmit={(e)=>Registration(e)}>
                  <input placeholder="Name" type="text" name="name" id='name'/><br />

                  <input placeholder="Email" type="text" name="email" id ='email'/><br />

                  <input placeholder="Mobile No:" type="text" name ="Mobile-No" id='Mobile-No' /><br />

                  <input placeholder="Country" type="text"  name ="Country" id='Country'/><br />

                  <input placeholder="Password" type="text" name="Password" id='Password' /><br />

                  <button type="submit">Submit</button><br />

               </form>


            </div>


         </div>


      </>
   );

};




export default App;