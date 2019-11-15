import React from 'react';
import './App.css';
import Dice from './components/Dice/dice'
import Search from './components/search/search'

export default class App extends React.Component {
  onSubmit = (model) => {
    alert(JSON.stringify(model))
  }
  
  render() {
    return (

      <div className="App">
        <Search />
        <Dice 
        title = 'Dice' 
        />
      </div>
    );
  }
}
