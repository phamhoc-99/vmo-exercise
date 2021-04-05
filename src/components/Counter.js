import React from 'react'
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset() {
    this.setState({
      count: 0
    });
  };

  render() {
    return (

<div className="bg-red-100 w-full h-screen  flex items-center">
   <div className="bg-green-100 w-3/12 h-48 text-center  mx-auto pt-12" >
   <button className='inc bg-green-500 rounded-md mx-3 w-9' onClick={(e) => this.increment(e)}>+</button>
    <button className='dec bg-green-500 rounded-md mx-3 w-9' onClick={(e) => this.decrement(e)}>-</button>
    <button className='reset bg-green-500 rounded-md mx-3' onClick={(e) => this.reset(e)}>Reset</button>
     <div className="text-center">Current Count: {this.state.count}</div>
  </div>
</div>
    );
  }
};
   
export default Counter;
