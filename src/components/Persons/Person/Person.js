import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';

const person = (props) => {
    return (
        // <div className={classes.Person}> 
        // <React.Fragment> 
        <Aux>
            <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}></input>

        </Aux> 
        // </React.Fragment>
        // </div>
    )
};

export default person;