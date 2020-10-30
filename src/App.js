import './App.css';
import PersonCard from './Components/NewComponent'
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        user1:{
            firstName:"Jane",
            lastName:"Doe",
            age:45,
            hairColor:"Black"
        },
        user2:{
          firstName:"John",
          lastName:"Smith",
          age:88,
          hairColor:"Brown"
        },
        user3:{
          firstName:"Millard",
          lastName:"Fillmore",
          age:50,
          hairColor:"Brown"
        },
        user4:{
          firstName:"Maria",
          lastName:"Smith",
          age:62,
          hairColor:"Brown"
      }
    }
}
  render(){
    return (
      <div className="App">
        <PersonCard user={this.state.user1} />
        <PersonCard user={this.state.user2} />
        <PersonCard user={this.state.user3} />
        <PersonCard user={this.state.user4} />
      </div>
    );
  }
}

export default App;
