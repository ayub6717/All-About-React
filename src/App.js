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
import Lifecycle from './components/Lifecycle'
import ComponentDid from './components/ComponentDidMount'
import Update from './components/ComponentDidUpdate'
import Unmount from './components/ComponentWillUnmount'
import Shouldupdate from './components/ShouldComponentUpdate'
import Frag from './components/Fragment'
import Header from './components/Divided_Indo_Components/Header'
import {infoCategory} from './components/Divided_Indo_Components/Info'


class App extends Component{
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-md-3">
              <Header category={infoCategory.technology} />
            </div>
          </div>
        </div>

        {/* <div className="App">
          <Frag />
          <Shouldupdate />
          <Unmount />
          <Update />
          <ComponentDid />
          <Lifecycle />
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
        </div>*/}
        </div> 
    );
  }
}

export default App;
