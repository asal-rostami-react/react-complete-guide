import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>

        </div>
    )
};



// const person = () => {
// return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old.</p>
// };

export default person;