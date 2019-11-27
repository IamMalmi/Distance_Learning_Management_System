import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Maincontainer from './Components/Teacher/teacher';
import AppChart from './Components/react';

const routing = (
    <Router>
      <div>
        <Route path="/mcq-upload" component={Maincontainer} />
        <Route path="/mcq-answer" component={App} />
        <Route path="/chart" component={AppChart} />
       
      </div>
    </Router>
  )
  


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
