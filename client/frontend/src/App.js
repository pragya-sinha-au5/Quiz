import React , { Fragment } from 'react';
import User from './components/user'
import Quiz from './components/QuestionBox'
import Result from './components/ResultBox'
import Timer from './components/Timer'
import {BrowserRouter as Router ,Route, Switch  ,Redirect} from 'react-router-dom'
import Main from "./main"
import './App.css';


function App() {
  return (
    <div>
      
      <Router>
      <Fragment>
       
        <Switch>
          
          
          <Route path="/" component={Main} />
          <Route path="/play/quiz" exact component={Quiz} />
          {/* <Route path="/play/result" exact component={Result} /> */}
        </Switch>
        </Fragment>
      </Router>
      
    </div>
  );
}

export default App;
