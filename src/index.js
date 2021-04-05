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

<nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
       
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
    
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
             <Link to="/">Counter</Link></a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/randomquotes">Random Quotes</Link></a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/todolist">todolist</Link></a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/calculator">calculator</Link></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
      <Link to="/">Counter</Link></a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
      <Link to="/randomquotes">Random Quotes</Link></a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
      <Link to="/todolist">todolist</Link></a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
      <Link to="/calculator">calculator</Link></a>
    </div>
  </div>
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
