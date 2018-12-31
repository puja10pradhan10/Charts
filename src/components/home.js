import React, { Component } from 'react';
// import logo from '../../logo.svg';
// import './App.css';
// import '../src/components/header';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }



  //error handling example
  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState(({ counter }) => ({
  //     counter: counter + 1
  //   }));
  // }

  // render() {
  //   if (this.state.counter === 3) {
  //     throw new Error('Somthing went wrong')
  //     throw Error('Somthing went wrong')
  //   }
  //   return <button onClick={this.handleClick}>{this.state.counter}</button>;
  // }
}

export default Home;
