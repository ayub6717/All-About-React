import React, { Component } from 'react';
import {infoCategory} from './Info'
class Header extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = e => {
      this.setState({
        searchTerm: e.target.value
      });
    };

    handleKeyPress = e => {

    };

  render() {
    const {category} = this.props;
    return (
      <div className="my-4">
          <h1 className="mb-4" style={{fontWeight:'300'}}>MD AYUB</h1>
          <input 
            type="search"
            className='form-control'
            placeholder='Typing'
            value={this.state.searchTerm}
            onChange = {this.handleChange}
            onKeyPress = {this.handleKeyPress}
          />
        <div className="my-4">
          {infoCategory && Object.keys(infoCategory).map(item => {
            if(category == infoCategory[item]) {
              return (
                <button className="btn btn-sm btn-warning mr-2 mb-2">
                  {`${infoCategory[item]}`}
                </button>
              );
            }

            return(
              <button className="btn btn-sm btn-light mr-2 mb-2">
                {`${infoCategory[item]}`}
              </button>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Header;
