import React,{ Component } from 'react';

class Tools extends Component {
render(){

return <div style={{flot:"left"}}>
   <div className="row">
      <div className="col-sm-3">
         <h1>Hi {this.props.name}</h1>
      </div>      
      <div className="col-sm-3">
         <h1>Hello</h1>
      </div>      
      <div className="col-sm-3">
         <h1>By</h1>
      </div>
   </div>
</div>
}
}

export default Tools