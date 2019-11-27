import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import './CSS/app.css';
import Chart from './chart'


class AppChart extends Component {
  
    state={
     
    }
  
    render(){
      return (
      <div className='AppChart'>
      <Chart/>
      </div>
    );
  }}

  export default AppChart;
  