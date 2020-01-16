import React from 'react';

const cockpit = (props) => {

     // let classes = ['red', 'bold'].join(' ');
     const assignedClasses = [];
     if(props.persons.length <= 2){
       assignedClasses.push(classes.red);
     }
     if(props.persons.length <= 1){
       assignedClasses.push(classes.bold);
     }
    return(
        <div>
            <h1>hello asal joon!!!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={this.togglePersonHandler}>
            Toggle Persons
            </button>

        </div>
       
    );
}

export default cockpit;