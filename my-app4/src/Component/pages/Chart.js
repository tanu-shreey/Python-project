import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);


const Chart = () => {
    return(
    <div className="Chart">
        <h3>Expense</h3>
    <div style={{ maxWidth: "650px" }}>
    <Bar
 
  
    data = {{
        labels: ["0","1","2","3","4","5","0","1","2","3","4","5","0","1","2","3","4","5","0","1","2","3","4","5"],
        datasets: [
          {
            data: [4, 5, 6,4, 5, 6,4, 5, 6,4, 5, 6, 6,4, 5, 6,4, 5, 6,4, 5, 6],
            label: "Expense",
            borderColor: "#3333ff",
            backgroundColor: "#B7C9E2",
            fill: true
          }
        
        ]
       } }
    
      type="bar"
      width={1000}
      height={250}
   
     
    />
 
    </div>
    </div>
    );
};


export default Chart;