import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);


const BarChart= () => {
    return(
    <div className="Chart">
        <h1>Expense</h1>
    <div style={{ maxWidth: "650px" }}>
    <Bar
 
  
    data = {{
        labels: ["0","1","2","3","4","5","0","1","2","3","4","5","0","1","2","3","4","5","0","1","2","3","4","5"],
        datasets: [
          {
            data: [4, 5, 6,4, 5, 6,4, 5, 6,4, 5, 6, 6,4, 5, 6,4, 5, 6,4, 5, 6],
            label: "Expense",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true
          }
        
        ]
       } }
    
      type="bar"
      width={900}
      height={250}
      options={{
       
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
     
    />
 
    </div>
    </div>
    );
};


export default BarChart;