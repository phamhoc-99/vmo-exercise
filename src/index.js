import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Counter from './components/Counter';
import RandomQuotes from './components/RandomQuotes';
import Todolist from './components/Todolist';
import Calculator from './components/Calculator'; 
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

//const Counter=()=><h2><Counter/></h2>  
//const RandomQuotes=()=><h2>content RandomQuotes</h2>
//const Todolist=()=><h2>content todolist</h2>  
//const Calculator=()=><h2>content calculator</h2>

function App(){
  return (
    <Router>
      <div className="App">

      <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>                                  
            </li>
            <li>
              <Link to="/randomquotes">Random Quotes</Link>
            </li>
            <li>
              <Link to="/todolist">todolist</Link>
            </li>
            <li>
              <Link to="/calculator">calculator</Link>
            </li>
          </ul>
        </nav>

<Route path="/"       exact component={Counter}           />   
<Route path="/randomquotes/" exact component={RandomQuotes}           />   
<Route path="/todolist"       exact component={Todolist}           />   
<Route path="/calculator"       exact component={Calculator}           />   

      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
export default App; 
