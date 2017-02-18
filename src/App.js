import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from './components/nav_bar';
import FeelingForm from './components/feeling_form'
import WelcomeMessage from './components/welcome_message'
import Results from './components/results'
import 'materialize-css/bin/materialize.js'
import 'materialize-css/bin/materialize.css'



class App extends Component {
  // componentDidMount(){
  //   document.addEventListener("DOMContentLoaded", function(e){
  //     setTimeout(function(){
  //       document.getElementsByClassName('button-collapse')[0].sideNav();

  //     }, 500)     
  //   })
  // }

  render() {

    return (
      <div id="app">
        <NavBar />
        <div id="app-body">
          <WelcomeMessage />
          <br />
          <FeelingForm />
          {this.props.currentFeeling.name ? <Results /> : null}
        </div>
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