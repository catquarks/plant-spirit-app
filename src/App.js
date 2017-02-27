import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './components/nav_bar'
import FeelingForm from './components/feeling_form'
import WelcomeMessage from './components/welcome_message'
import Results from './components/results'
import Modal from './components/modal'
import $ from 'jquery'
import 'materialize-css/bin/materialize.js'
import 'materialize-css/bin/materialize.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      modalIsOpen: false,
      currentModal: null
    }
  }

  componentDidMount(){
    $( document ).ready(function(){
      setTimeout(function(){

        $(".button-collapse").sideNav();

      }, 800)
    })
  }

  handleModalClick(modal){
    console.log(modal + ' will open')

    this.setState({
      modalIsOpen: true,
      currentModal: modal
    })
  }

  afterOpenModal(){
    console.log('the modal opened')
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    return (
      <div id="app">
        <Modal modalIsOpen={this.state.modalIsOpen} afterOpenModal={this.afterOpenModal.bind(this)} closeModal={this.closeModal.bind(this)} currentModal={this.state.currentModal} />
        <NavBar handleModalClick={this.handleModalClick.bind(this)} />
        <div id="app-body">
          <WelcomeMessage />
          <br />
          <FeelingForm />
          {this.props.currentFeeling.name ? <Results /> : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return({
    currentFeeling: state.currentFeeling,
  })
}

export default connect(mapStateToProps)(App)