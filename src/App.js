import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Asal', age: 35},
      { name: 'Siamak', age: 28},
      { name: 'Julie', age: 9}
    ],
    otherStates : 'this is a other state'

  };

  switchNameHandler = (newName) => {
    // console.log("was clicked!");
    this.setState( {
      persons: [
        { name: newName, age: 35},
        { name: 'Siamak', age: 36},
        { name: 'Julie', age: 9}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
       <h1>hello asal joon!!!</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler.bind(this, 'Alireza')}>Switch Name</button>

       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Mina')} >My Hobbies: watchin TV</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>

       {/* <Person name="Asal" age="35"/>
       <Person name="Siamak" age="28">My Hobbies: watchin TV</Person>
       <Person name="Julie" age="9"/> */}
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hello asal joon!!! by jsx'))
  }
}

export default App;
