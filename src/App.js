import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id:'1', name:'name state 1', age:'state 1'},
      {id:'2', name:'name state 2', age:'state 2'},
      {id:'3', name:'name state 3', age:'state 3'},
    ],
    otherState:'state other value',
    showPersons:false,
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name: newName, age:'alterado 1'},
        {name:'name alterado 2', age:'alterado 2'},
        {name:'name alterado 3', age:'alterado 3'},
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
       return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
      
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  tooglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
 

  render() {

    const style = {
      backgroundColor: 'green',
      color: '#fff',
      font:'inhrit',
      border:'1px solid blue',
      padding:'8px',
      margin: '0 auto',
      cursor:'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}  
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    //output "red bold"
    let classes = ['red', 'bold'].join(' ');


    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes}>it will work</p>

        <button
          style={style}
          onClick={this.tooglePersonHandler}>Toogle persons
        </button>
        {persons}
      </div> 
    );
  }
}

export default App;
