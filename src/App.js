import React, { Component } from 'react';
import Counter from './components/Counter';
import RandomQuotes from './components/RandomQuotes';
class App extends Component {

 render() {
    return (
      <Counter/>
      <RandomQuotes/>
    );
  }
}

export default App;