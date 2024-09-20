import React from 'react'
import './Style.css';
import tost from './images/tost.jpg';

const Resturant = () => {

    return (
        <>
            <div className="card-conatiner">
                <div className="card">

                    <div className='card-body'>
                    <span className='card-heading'>BreakFast</span>
                   <div className='card-image'>  <img src={tost}alt='Toast-image' /></div>
                   
                        <h2>Toast</h2>
                        <span className='Read'>Read</span>
                        <span className='para'>
                            <p> Avocado toast is a delicious and simple breakfast, 
                        snack or light meal! Learn how to make the BEST avocado toast with this
                         recipe, plus fun variations.</p>
                       
                        </span>
                    </div>


                </div>


            </div>

        </>
    )

}
export default Resturant;