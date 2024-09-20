
import './Style2.css'

const Card = ({ menuData}) => {

  return (
    <>
    
   {
    
    menuData.map((curElem)=>{
        return(
            <> 
             <div>
          
            <div className='card-container' >
             
            <div className="div-one">
            <div className='fetchData'>
            <div  className='icon-image'>  {curElem.icon} </div>
            <div className='fetch-data'> <div ><span className='data-name'><h6 style={{fontWeight:'bold' , fontSize:'15px'}}>{curElem.name }
              </h6></span></div> <div style={{color:'grey' , fontSize:'13px'}}> <span className='data-description'> {curElem.description}</span> </div>  </div>
            </div>
         
            <div className='data-money' style={{fontWeight:'bold' , fontSize:'15px'}}> <span > {curElem.money}</span> </div>
          
             </div>
            </div>
            </div>
            </> 
        );
    })}
    
    
   
</>
   
        
  )
}

export default Card;
