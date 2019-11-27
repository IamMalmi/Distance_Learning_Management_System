import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../CSS/Questions.css';



class Question extends Component {

    state={
        correct_answer:this.props.correct_answer,
        student_answer:''
       
    }

    constructor(props) {
      super(props);
    }
    
/* 
    handleChange(){
       
      
      this.state.correct_answer=this.props.correct_answer;
        var rate_value;
        console.log(this.state.correct_answer);
        
       if (document.getElementById(this.tempStr1).checked) {
           rate_value = document.getElementById(this.tempStr1).getElementsByName(this.props.index).value;
          console.log(rate_value)
         }


      if (document.getElementById(this.tempStr2).checked) {
           rate_value = document.getElementById(this.tempStr2).value;
           
           
         }
  

      if (document.getElementById(this.tempStr3).checked) {
          rate_value = document.getElementById(this.tempStr3).value;
          
        } */
/*  */
       /*  if (document.getElementById('d').checked) {
          rate_value = document.getElementById('d').value;
          this.state.student_answer=rate_value;
          
        } */
        //console.log('hjjjjjt'+this.rate_value);
     /*  if(this.state.correct_answer==this.state.student_answer){
          
            console.log('Answer is correct');
        }
        else
        console.log('Answer is incorrect');
        this.state.correct_answer=null;
        rate_value='c';
      
      } */

      handleGetValue = (e) => {
        this.setState({
          student_answer: e.currentTarget.value
        })
        console.log(this.state.student_answer);
      }




    
        //this.props.handleChange(value,this.props.index)
      
render(){

  

    
return(
      <div className='Questions'>
      
            <legend>Question{this.props.index+1}</legend><br/>
      <b>{this.props.question}</b><br/><br/>
    
      
      <input type="radio" name={this.props.index}  value={this.props.answer_a} onChange={this.handleGetValue} /><b>{this.props.answer_a}</b><br/>
      <input type="radio" name={this.props.index}  value={this.props.answer_b} onChange={this.handleGetValue}  /> <b>{this.props.answer_b}</b><br/>
      <input type="radio" name={this.props.index}   value={this.props.answer_c} onChange={this.handleGetValue}  /> <b>{this.props.answer_c}</b><br/>
      <input type="radio" name={this.props.index}   value={this.props.answer_d} onChange={this.handleGetValue}  /> <b>{this.props.answer_d}</b><br/>
      
      
      </div>
);
}}
export default Question;


/* 
      <input type='checkbox' name='answer1' value={props.answer_a}></input>
      <input type='checkbox' name='answer2' value={props.answer_b}></input>
      <input type='checkbox' name='answer3' value={props.answer_c}></input>
      <input type='checkbox' name='answer4' value={props.answer_d}></input>
     */