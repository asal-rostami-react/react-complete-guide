import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';

// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';


class App extends Component {

  state = {
    persons: [
      { id:'fgsh11',name: 'Asal', age: 35},
      { id:'jjgys77',name: 'Siamak', age: 28},
      { id:'kvbs44',name: 'Julie', age: 9}
    ],
    otherStates : 'this is a other state',
    showPerson : false

  };

  deletePersonHandler = (personIndex) => {

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });


    // const person = Object.assign({}, this.state.persons[personIndex]);
    // or
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  render() {
    let persons = null;
    let btnClass = '';


    if( this.state.showPerson ) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>

      );

      // btnClass.push(classes.Red);
      btnClass =classes.Red;

    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
          <div className={classes.App}>
              <h1>hello asal joon!!!</h1>
              <p className={assignedClasses.join(' ')}>This is really working!</p>
              <button className={btnClass} onClick={this.togglePersonHandler}>
                Toggle Persons
              </button>

              {persons}
          </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hello asal joon!!! by jsx'))
  }
}

export default App;
