import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import FeelingForm from './components/feeling_form'
import PlantsList from './components/plants_list'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p>How are you feeling?</p>
        <br />
        <FeelingForm />
        <PlantsList />
      </div>
    );
  }
}

export default App;
