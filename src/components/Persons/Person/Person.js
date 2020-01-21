// import React, {useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Aux';
// import withClass from '../../../hoc/withClass';
// import classes from './Person.css';

// const person = (props) => {
//     const inputRef = useRef(null);
    

//     useEffect(() => {
//         console.log('[Person.js] focus on last input')
//         inputRef.current.focus();
//         return () => {
//             console.log('[Person.js] cleanup work in useEffect')
//         };
//     }, []);


//     return (
//         // <div className={classes.Person}> 
//         <Aux>
//             {props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
//             <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old.</p>
//             <p key="i2">{props.children}</p>
//             <input key="i3" 
//             ref={inputRef}
//             type="text" 
//             onChange = {props.changed} 
//             value={props.name}></input>

//         </Aux> 
//         // </div>
//     )
// };

// // checking the type of propertices before passing 
// person.propTypes = {
//     clicked: PropTypes.func,
//     name: PropTypes.string,
//     age: PropTypes.number,
//     changed: PropTypes.func
// };

// // when you want to use Aux with withClass function
// export default withClass(person, classes.Person);

// // export default person;


// *******************************************************************************************
// class-based Person component
// ******************************************************************************************

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <AuthContext.Consumer>
            {context => 
            context.authenticated  ? <p>Authenticated!</p> : <p>Please log in</p>
            }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
        key="i3"
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
