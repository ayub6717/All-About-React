import React,{ Component } from 'react'
import './App.css'
// import Myfun from './components/Functional-component'
// import Tools from './components/Class-component'
// import Props from './components/Props'
// import Message from './components/State'
// import Count from './components/SetState'
// import Dont from './components/Distructuring'
// import Events from './components/Events'
// import ParentComponent from './components/ParentComponent'
// import ConditionalRendering from './components/Conditional-Rendering'
// import NameList from './components/NameList'
// import Form from './components/Form'
// import Lifecycle from './components/Lifecycle'
// import ComponentDid from './components/ComponentDidMount'
// import Update from './components/ComponentDidUpdate'
// import Unmount from './components/ComponentWillUnmount'
// import Shouldupdate from './components/ShouldComponentUpdate'
// import Frag from './components/Fragment'
import Header from './components/Divided_Indo_Components/Header'
import News, {infoCategory} from './components/Divided_Indo_Components/Info'
import Newslist from './components/Divided_Indo_Components/Newslist'
import Pagination from './components/Divided_Indo_Components/Pagination'
import Loading from './components/Divided_Indo_Components/Loading'
import axios from 'axios'

// const fakeNews = [
//   {
//     title: 'Title',
//     content: 'Content',
//     url: 'https://ayub6717.netlify.app',
//     urlToImage: 'https://ayub6717.netlify.app',
//     publishedAt: 'published date and time',
//     source: {
//       name: 'CNN'
//     },
//   },
//   {
//     title: 'Title',
//     content: 'Content',
//     url: 'https://ayub6717.netlify.app',
//     urlToImage: 'https://ayub6717.netlify.app',
//     publishedAt: 'published date and time',
//     source: {
//       name: 'CNN'
//     },
//   },
  
// ];

// const URL = 'https://jsonplaceholder.typicode.com/users'
// axios.get(URL).then((res)=> {
//   console.log(res.data);
// });

// const user = {
//   name: 'Ayub',
//   email: 'ayub@',
//   username: 'ayub6717'
// }
// axios.post(URL, user).then((res)=>{
//   console.log(res);
// });

class App extends Component{
  state = {
    news: [],
    category: infoCategory.technology
  };

  changeCategory = (category) => {
      console.log(category);
      this.setState({category});
  }
  
  componentDidMount(){
    // const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=9`;
    // axios 
    // .get(url)
    // .then((response)=>{
    //   this.setState({
    //     news: response.data.articles,
    //   });
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    const news = new News(infoCategory.technology);
    news.getNews().then(data =>{
      console.log(data);
    })
  }

  componentDidUpdate(prevProps, prevState){
    // if(prevState.category !== this.state.category){
    //   const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=9`;
    //   axios 
    //   .get(url)
    //   .then((response)=>{
    //     this.setState({
    //       news: response.data.articles,
    //     });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // }
  }
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-md-3">
              <Header 
                category={this.state.category} 
                changeCategory={this.changeCategory} 
              />
              <div className="d-flex">
                  <p className='text-black-50 '>
                    About {0} results found
                  </p>
                  <p className='text-black-50 ml-auto'>
                    {1} page of {100}
                  </p>
              </div>
              <Newslist news={this.state.news} />
              <Pagination />
              <Loading />
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
