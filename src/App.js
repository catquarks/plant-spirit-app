import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './components/nav_bar';
import FeelingForm from './components/feeling_form'
import WelcomeMessage from './components/welcome_message'
import Results from './components/results'

class App extends Component {
  render() {

    return (
      <div id="App">
        <NavBar />
        <WelcomeMessage />
        <br />
        <FeelingForm />
        {this.props.currentFeeling.name ? <Results /> : null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    currentFeeling: state.currentFeeling
  })
}

export default connect(mapStateToProps)(App)