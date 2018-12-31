import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header';
// import errorHandleComponent from '../src/components/errorHandleComponent'
import HandleErrorComponent from '../src/components/errorHandleComponent';

class App extends Component {
  constructor() {
    console.log('1 App - in constructor');
    super()
  }

  componentWillMount() {
    console.log('2 App - component will mount')
  }

  componentDidMount() {
    console.log('4 App - component did mount')
  }

  render() {
    console.log('3 App - in render')

    return (
      <div>
        <HandleErrorComponent>
          <Header />
        </HandleErrorComponent>
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log(' App - component should update')
  }

  componentWillUnmount() {
    console.log('5 App - component will unmount')
  }
}

export default App;
