import React, { Component } from 'react';
import '../App.css';
import Picture from './picture';

class Links extends Component {
    render() {
      return (
<div>
< button onClick = {() => <Picture       
      image= "http://www.gstatic.com/tv/thumb/persons/512947/512947_v9_ba.jpg"
      title= "kim"
      legende ="mamamamam"/>
       }> {this.props.title} 
</ button>
 
        </div>


      )}
}
  
  export default Links;
   