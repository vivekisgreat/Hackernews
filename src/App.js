import React,{Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    const helloWorld = 'Wlcome to the Road to learn React';
    return (
      <div className="App">
        <h2> {helloWorld} </h2>
      </div>
    );
  }
}

export default App;
