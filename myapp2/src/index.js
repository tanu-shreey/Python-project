import {useState} from 'react'
import ReactDOM from 'react-dom/client';



 function Color(){
    const [color , setColor] = useState("red");
     return (<>
     <h1> My Favourite Color is {color}!</h1>
     <button type="button " onClick={()=> setColor("Blue")}>
      Blue</button>
      <button type="button " onClick={()=> setColor("Red")}>
      Red</button>
      <button type="button " onClick={()=> setColor("Green")}>
    Green</button>
      <button type="button " onClick={()=> setColor("Yellow")}>
      Yellow</button>
     </>);
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Color />)

