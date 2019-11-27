import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './CSS/app.css';
import Question from './Components/student/student.js';
//import './assests/style.css';
import Quizservices from './Quizservices';
import Picture from './Picture' 

class Quiz extends Component {

  
  state={
    data:[],
    show:false,
  }

  componentDidMount(){
    console.log(this.state.data);
    console.log(ReactDOM.findDOMNode(this));
  }
  
  clickButton=()=>{
  this.state.show=true;
  }



  getData=()=>{
    this.state.show=true;
    let responseToHandle;
    axios.get("http://localhost:9000/api/getData")
      .then((response)=> 
       {
        console.log(response.data);//This is working
        responseToHandle = response.data;
        console.log(responseToHandle);//This is working
        this.setState({
          data: responseToHandle
      }, () => {
          console.log(this.state.data)
          // Now you can use this.state.data
      })})
      .catch(function (error)
        {
        // handle error
        console.log(error);
        });
  }

     switchShow=()=>{
      this.state.show=true;
     }

render(){

  let question=null;
  let Image=null;
if(this.state.show)
{
question=(
  <div >
  {this.state.data.map((item,index)=>{
    
    {
      
      console.log(item.question);
      

    return(<Question index={index} question={item.question} answer_a={item.answer_a} answer_b={item.answer_b}
       answer_c={item.answer_c} answer_d={item.answer_d} correct_answer={item.correct_answer} ></Question>);
       
       
     }}
     
    )}
    <button>Submit</button>
   </div>);}
   else {
Image=(
<div><Picture/>
</div>
)}


  return(
    <div className="Quiz">
    <h3 >Quiz Section</h3>
    <p>
    <button className="button3" onClick={this.getData}>විද්‍යාව බහුවරණ </button>
    
    </p> 
    {Image}{question}       



</div>
  )

  /* return(
    <div className="Quiz">
    <h3 >Quiz Section</h3>
    <p>
    <button className="button3" onClick={this.getData}>Science quiz</button>
    <button className="button4" onClick={this.getData}>English quiz</button>
    <button className="button5" onClick={this.getData}>Sinhala quiz</button>
    <button className="button6" onClick={this.getData}>History quiz</button>
    <button className="button7" onClick={this.getData}>Maths quiz</button>
    <button className="button8" onClick={this.getData}>ICT quiz</button>
    </p>
    {this.state.data.map((item,index)=>{
      
      {
        console.log(item.question)
      return(<Question key={index} question={item.question} answer_a={item.answer_a} answer_b={item.answer_b}
         answer_c={item.answer_c} answer_d={item.answer_d}></Question>)
       }}

      )}
      <p></p>

      
      
    </div>

  )
} */
  

}}



export default Quiz;
