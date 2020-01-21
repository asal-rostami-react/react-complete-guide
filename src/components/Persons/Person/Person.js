import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

const person = (props) => {
    const inputRef = useRef(null);
    

    useEffect(() => {
        console.log('[Person.js] focus on last input')
        inputRef.current.focus();
        return () => {
            console.log('[Person.js] cleanup work in useEffect')
        };
    }, []);


    return (
        // <div className={classes.Person}> 
        // <React.Fragment> 
        
      // <Aux classes={classes.Person}>
        <Aux>
            <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old.</p>
            <p key="i2">{props.children}</p>
            <input key="i3" 
            ref={inputRef}
            type="text" 
            onChange = {props.changed} 
            value={props.name}></input>

        </Aux> 
        // </React.Fragment>
        // </div>
    )
};

// checking the type of propertices before passing 
person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// when you want to use Aux with withClass function
export default withClass(person, classes.Person);

// export default person;