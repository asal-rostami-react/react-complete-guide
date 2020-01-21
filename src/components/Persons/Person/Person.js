import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

const person = (props) => {
    return (
        // <div className={classes.Person}> 
        // <React.Fragment> 
        
      // <Aux classes={classes.Person}>
        <Aux>
            <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old.</p>
            <p >{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}></input>

        </Aux> 
        // </React.Fragment>
        // </div>
    )
};

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// when you want to use Aux with withClass function
export default withClass(person, classes.Person);

// export default person;