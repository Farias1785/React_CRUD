import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import { throws } from 'assert';

  const app = props => {

  const [personsState, setPersonsState] = useState({
      persons:[
        {name:'name state 1', age:'state 1'},
        {name:'name state 2', age:'state 2'},
        {name:'name state 3', age:'state 3'},
      ],
    });

  const [otherState,setotherState] = useState('another thing');

  const switchNameHandler = (newName) =>{
   setPersonsState({
      persons:[
        {name:newName, age:'alterado 1'},
        {name:'name alterado 2', age:'alterado 2'},
        {name:'name alterado 3', age:'alterado 3'},
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>it will work</p>
      <button onClick={switchNameHandler.bind(this,'Gabriel')}>Swicth name</button>
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age}/>
      
      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      click={switchNameHandler.bind(this,'Sr Farias')}
      />
      
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age}/>
      
    </div> 
  );
}


export default app;




