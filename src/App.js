import React,{Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    var helloWorld = 'Welcome to the Road to learn React';
    var user ={
      firstName:"vivek",
      lastName:"verma",
      age:20
    }
    return (
      <div className="App">
        <h2> {helloWorld} </h2>
        <p>{user.firstName} {user.lastName} is {user.age} years old</p>
      </div>
    );
  }
}

export default App;
