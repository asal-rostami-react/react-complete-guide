import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person"> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name}></input>

        </div>
    )
};



// const person = () => {
// return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old.</p>
// };

export default person;