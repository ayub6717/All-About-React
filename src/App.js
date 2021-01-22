import React,{ Component } from 'react'
import './App.css'
import Myfun from './components/Functional-component'
import Tools from './components/Class-component'
import Props from './components/Props'
import Message from './components/State'
import Count from './components/SetState'
import Dont from './components/Distructuring'
import Events from './components/Events'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/Conditional-Rendering'
import NameList from './components/NameList'
import Form from './components/Form'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Form />
        <NameList />
        <ConditionalRendering />
        <ParentComponent />
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

        <Dont name = "Dhaka" area = "Shaymoli"></Dont>
        <Events></Events>
        
      </div>
    );
  }
}

export default App;
