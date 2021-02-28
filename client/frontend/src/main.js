import React, { Fragment } from 'react';
import { Router , Route ,Redirect ,Link} from "react-router-dom";
import {connect} from 'react-redux'
import Quiz from './components/QuestionBox' 
import Result from './components/ResultBox'
import Register from './components/user'
import './App.css';
import { loadUser,logoutUser } from "./actionCreator/userAction";
import Quizquestion from "./question/index"
import store from "./reducer/store";

function refreshPage() {
  window.location.reload(false);
}
class Main extends React.Component {
  
  componentDidMount = () => {
    store.dispatch(loadUser());
    store.dispatch(logoutUser())
    this.getQuestion();
  };

  
  state = {
    questionBank:[],
    score:0,
    responses:0,
    
    
  };
  getQuestion =() =>{
    Quizquestion().then(question =>{
      this.setState({
        questionBank:question,
      })
    })
  }
 
  checkAnswer =  (answer,correctAnswer) =>{
    if(answer === correctAnswer){
      this.setState({
        score :this.state.score + 1,
      })
    }
    
    this.setState({
     responses:this.state.responses < 5 ? this.state.responses + 1 : 5,
    })
    
  }
 
  playAgain = () => {
    this.getQuestion();
    this.setState({
      score:0,
      responses:0,
      
    })

  }
  render() {
    return (
      // <BrowserRouter>
        <Fragment className="body">
          {localStorage.getItem('token') ?
          
               
              <div>
               <div className="hheading">
                <div className="heading">Check out how much u know about Corona&nbsp;&nbsp;<Link onClick={refreshPage} className="hheading text-warning">Logout</Link></div>
                </div>
                
                
              { this.state.questionBank.length > 0 && this.state.responses < 5 && 
                
                this.state.questionBank.map(({question,answers,correct,questionId }) =>( 
                
              <Quiz  question={question} options={answers} keys={questionId} 
                
                selected={answer => this.checkAnswer(answer,correct)}
                
                />))}
               {this.state.responses === 5 ? (<Result score={this.state.score} playAgain ={this.playAgain }/>):null}
            </div>
            :<div> 
               <Register/> 
               
               </div>    
                
                }
       
        </Fragment>
    
    );
  }
}


const mapStateToProps=(state)=>{
  return state
}
export default connect(mapStateToProps) (Main);

