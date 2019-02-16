import React, { Component } from 'react';
import '../App.css';

class Picture extends Component {
    render() {
      return (
<div>
        <img src = {this.props.image}></img>
            <h3>{this.props.title}</h3>
            <h3>{this.props.legende}</h3>
        </div>


      )}
}
  
  export default Picture;
  
