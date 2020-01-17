import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id:'fgsh11',name: 'Asal', age: 35},
        { id:'jjgys77',name: 'Siamak', age: 28},
        { id:'kvbs44',name: 'Julie', age: 9}
      ],
      otherStates : 'this is a other state',
      showPerson : false,
      showCockpit: true

    }
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
      return true;
    } else {
      return false;
    }
    
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render');
    let persons = null;
  
    if( this.state.showPerson ) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }
    return (
          <div className={classes.App}>
            <button onClick={() => {
              this.setState({showCockpit: false});
            }}
            >
              remove cockpit</button>
            {this.state.showCockpit ? (<Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPerson}
              personsLenght={this.state.persons.length}
              clicked={this.togglePersonHandler}
            />) : null}
            {persons}
          </div>
    );
  }
}

export default App;
