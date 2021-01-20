import React,{ Component } from 'react';
import './App.css';
import Myfun from './components/Functional-component'
import Tools from './components/Class-component'
import Props from './components/Props'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Myfun />
        <Tools />
        <Props />
      </div>
    );
  }
}

export default App;
