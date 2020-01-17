import React, {useEffect} from 'react';
import classes from './Cockpit.css';

// whenever state changes , it will be rendered
const cockpit = (props) => {
  useEffect(() =>{ 
    console.log('[cockpit.js] useEffect');
    //Http request....
    // like
    setTimeout(() => {
      console.log("Saved data to cloud!");
    }, 1000);
    // for cleanin up
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  } ,[props.persons]);


  // by considering an empty array,this useEffect will be rendered just one time at the begining of runing the project
  // useEffect(() => {
        // some code.....
  // } , []);

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons)
    {
      btnClass =classes.Red;
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
          </button>
      </div>   
  );
}

export default cockpit;