import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../CSS/QuestionBox.css';
import axios from "axios";

class QuestionBox extends Component{
        state={
                question:'',
                answer_a:'',
                answer_b:'',
                answer_c:'',
                answer_d:'',
                correct_answer:''


        }

        questionChange=(e)=>
        {
        this.state.question=e.target.value;
        }


        answer_aChange=(e)=>
        {
        this.state.answer_a=e.target.value;
        console.log(this.state.answer_a);
        }


        answer_bChange=(e)=>
        {
        this.state.answer_b=e.target.value;
        }


        answer_cChange=(e)=>
        {
        this.state.answer_c=e.target.value;
        }
        
        answer_dChange=(e)=>
        {
        this.state.answer_d=e.target.value;
        }

        onSubmit=()=>{

                var rate_value; 
                if (document.getElementById('a').checked) {
                        rate_value = document.getElementById('a').value;
                        this.state.correct_answer=this.state.answer_a;
                        console.log(this.state.correct_answer)
                      }


                if (document.getElementById('b').checked) {
                        rate_value = document.getElementById('b').value;
                        this.state.correct_answer=this.state.answer_b;
                        console.log(this.state.correct_answer)
                      }

                if (document.getElementById('c').checked) {
                        rate_value = document.getElementById('c').value;
                        this.state.correct_answer=this.state.answer_c;
                        console.log(this.state.correct_answer);
                        console.log(this.rate_value);
                      }

                      if (document.getElementById('d').checked) {
                        rate_value = document.getElementById('d').value;
                        this.state.correct_answer=this.state.answer_d;
                        console.log(this.state.correct_answer)
                      }
              
              
              
                const passingObject = {
                  question: this.state.question,
                  answer_a: this.state.answer_a,
                  answer_b: this.state.answer_b,
                  answer_c:this.state.answer_c,
                  answer_d:this.state.answer_d,
                  correct_answer:this.state.correct_answer
                };
              
                axios.post('http://localhost:9000/api/add', passingObject)
                .then(res => console.log(res.data));
               
                
                this.setState({
                question: '',
                answer_a  : '',
                answer_b: '',
                answer_c:'',
                answer_d:''
                })

                document.getElementsByClassName('QuestionBox').innerHTML = 'Successfully uploaded question';
               


        }

    render(){ 
       // const { answer_a } = this.state;
        //const isEnabled = (!this.state.answer_a.length>=0);
        return(
                      
<div className='QuestionBox'>
      <form>
      <h1>බහුවරණ ප්‍රශ්න ඇතුළත් කිරීම</h1>
      
     <p><b>ප්‍රශ්නය </b></p>
     <textarea onChange={this.questionChange}></textarea>
      <div className='answers'>
      <p><b>පිළිතුර a</b></p>
      <input type='text' id='a' onChange={this.answer_aChange} reruired='required' ></input>
      <p><b>පිළිතුර b</b></p>
      <input type='text' id='b' onChange={this.answer_bChange}></input>
      <p><b>පිළිතුර c</b></p>
      <input type='text' id='c' onChange={this.answer_cChange}></input>
      <p><b>පිළිතුර d</b></p>
      <input type='text' id='d'onChange={this.answer_dChange}></input><br/><br/>
      </div>
      
      <p><b>නිවැරදි පිළිතුර</b></p>
       
      <input type="radio" id='e' name={this.state.correct_answer}  value={this.state.answer_a} onChange={this.handleGetValue} /><b>a</b><br/>
      <input type="radio" id ='f' name={this.state.correct_answer}  value={this.state.answer_b} onChange={this.handleGetValue}  /> <b>b</b><br/>
      <input type="radio" id = 'g' name={this.state.correct_answer}   value={this.state.answer_c} onChange={this.handleGetValue}  /> <b>c</b><br/>
      <input type="radio" id='h' name={this.state.correct_answer}  value={this.state.answer_d} onChange={this.handleGetValue}  /> <b>d</b><br/><br/>
      
      
      </form>
      
      
      <button onClick={this.onSubmit} ><p>ඇතුළත් කරන්න</p></button>
      
</div>
        )}}
export default QuestionBox