import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
 import { Line } from 'react-chartjs-2'
import BarChart from './BarChart';
 ChartJS.register(...registerables);

 const Data={
  labels: ['Jan','Feb' , 'Mar' ,'Apr' ,"May" , "Jun" ],
  datasets:[
    {
     label:'First dataset',
     data: [33.53,85,41,44,65],
     fill:true,
     backgroundColor:"rgba(75,192,192,0.2)",
     borderColor:"rgba(75,192,192,1)"

    }
    ,
    {

      label:'second dataset',
      data:[33, 25, 35, 51, 54, 76],
      fill:false,
       borderColor: "#742774"
    }

  ]
 };

   const App = () => {
  return (
    <div style={{width:'600px', display:'flex' ,flexDirection:'row', }}>
      <Line data={Data} />
      <div><BarChart /></div>
    </div>
  
  )
}

export default App;




