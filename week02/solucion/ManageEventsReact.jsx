import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.decrement=this.decrement.bind(this);
    this.increment=this.increment.bind(this);
    this.state={counter:0}
  }
  decrement(){
    this.setState(prevState => ({counter: prevState.counter - 1}));
  }
  increment(){
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }
  
  render() {
    let Counter=this.state.counter
    return (
      <div>
        <h1 id='counter'>{this.state.counter}</h1>
          <button id='decrement' onClick={this.decrement}>
            Decrement
          </button>
          <button id='increment' onClick={this.increment}>
            Increment
          </button>
      </div>
    )
  }
}
// aprendizaje indentificar los botones  id brinda una forma de identificarlos 