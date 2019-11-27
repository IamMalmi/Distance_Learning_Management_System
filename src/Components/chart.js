import React,{Component} from 'react';
import ChartComponent, {Bar,Line,Pie} from 'react-chartjs-2';


class Chart extends Component {
  
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:["Question1","Question2","Question3","Question4","Question5"],
                datasets:[
                    {
                        label:'MCQ Results of Students',
                        data:[
                            15,
                            20,
                            21,
                            30,
                            18,
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,163,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(255,159,64,0.6)',
                        ]
                    }
                ]
            }
        }
    }

   
    render(){
      return (
      <div className="chart">
       <Bar 
         data={this.state.chartData}
         options={{
             title:{
                 display:true,
                 text:'Number of uploaded correct Answers',
                 fontSize:25
             },
             legend:{
                 display:true,
                 position:'right'
             }
            
         }}/>
        
       
     Chart Component
       
        
      </div>
    );
  }}

  export default Chart;
  