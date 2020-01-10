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
    otherStates : 'this is a other state',
    showPerson : false

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

  togglePersonHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Asal', age: 35},
        { name: event.target.value, age: 28},
        { name: 'Julie', age: 11}
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if( this.state.showPerson ) {
      persons = (
        <div>
              <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
              <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Mina')} 
              changed={this.nameChangedHandler}>My Hobbies: watchin TV</Person>
              <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>

          </div>

      );

    }

    return (
      <div className="App">
        <h1>hello asal joon!!!</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Switch Name</button>

       {persons}
     
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hello asal joon!!! by jsx'))
  }
}

export default App;
