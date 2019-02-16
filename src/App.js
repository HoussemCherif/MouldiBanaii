import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './components/picture.js'
import Links from './components/buttons.js'

class App extends Component {

  state = {
    list: [{
      image: "https://images.unsplash.com/photo-1550145367-9a4c43eb3909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      nom: "ayoub",
      des:"hahahahah ayoub",
    }, {
      image: "https://images.unsplash.com/photo-1550100136-e092101726f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      nom: "Oumayma",
      des:"hahahahah omaima",
    }, {
      nom: "mohsen",
      des:"hahahahah mohsen",
      image: "https://images.unsplash.com/photo-1550228309-4cf43ffe255e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    }],
    currentIndex: 0
  }

  render() {

    return (
      <div>
        <header>
          <center>
        <button onClick={
          () => {
            this.setState({ currentIndex: 1 })
          }
        }>Oumayma</button>
 <button onClick={
          () => {
            this.setState({ currentIndex: 2})
          }
        }>Mohsen</button>
         <button onClick={
          () => {
            this.setState({ currentIndex: 0 })
          }
        }>ayoub</button>
        </center>
        </header>

        <br>
        </br>
<center>
        {
        }
        <img src={ this.state.list[this.state.currentIndex].image} style = {{height : "300px", width : "300px"}}/>
        
       <h3>         { this.state.list[this.state.currentIndex].nom}
</h3>
       
      <h2>{ this.state.list[this.state.currentIndex].des}</h2>

      </center>
      </div>
      
      



    );
  }
}



export default App;
