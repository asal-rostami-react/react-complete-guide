import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

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
          {
            this.state.persons.map((peron, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}
              name={peron.name}
              age={peron.age} 
              key={peron.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>

      );

    }

    return (
      <div className="App">
        <h1>hello asal joon!!!</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>

       {persons}
     
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hello asal joon!!! by jsx'))
  }
}

export default App;
