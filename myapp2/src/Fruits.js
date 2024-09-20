import React from 'react'
import data from './data.json'


    function Fruits() {


   
    {data.fruits.map((d) => {
        return (
            <>
                <tr>
                    <td>{d.name}</td>
                    <td> {d.color}</td>
                    <td>  {d.weight}</td>
                </tr>


            </>
        );
    
    
    })
}

    return (
        <div>
            <table>


                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Weight</th>

                    </tr>
                </thead>
                <tbody>

                    {FruitsData}
                </tbody>
            </table>
        </div>
    )
}





export default Fruits;