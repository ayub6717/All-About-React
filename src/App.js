import React,{ Component } from 'react'
import './App.css'
import Myfun from './components/Functional-component'
import Tools from './components/Class-component'
import Props from './components/Props'
import Message from './components/State'
import Count from './components/SetState'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Myfun />
        <Tools />
        
        <Props name = "Ayub" email = "ayub@gmail.com">
          <h4>Hey i'm Front-End developer</h4>
          <p>Hey i'm Engineer</p>
        </Props>
        <Props name = "Rohan" email = "rohan@gmail.com"></Props>
        <Props name = "Ahmed" email = "ahmed@gmail.com"></Props>

        <Tools name = "Rohan"></Tools>

        <Message />
        <Message name = "Ha Ha Ha">
          <h3>Need A Chocolate</h3>
        </Message>

        <Count />
      </div>
    );
  }
}

export default App;
