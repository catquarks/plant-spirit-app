import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'


class WelcomeMessage extends Component {
	constructor(props){
		super(props)
		this.handleToggleAppMode = this.handleToggleAppMode.bind(this)
		this.outputWelcomeMessage = this.outputWelcomeMessage.bind(this)
	}

	handleToggleAppMode(){
		this.props.actions.toggleAppMode()
		this.props.actions.resetCurrentFeeling()
	}

	outputWelcomeMessage(){
		if (this.props.appMode === 'easing_plants'){
			return 'What are you feeling?'
		} else {
			return 'What would you like to feel?'
		}
	}

	render(){
		return(
			<div id="welcome-message">
				<p>
					{this.outputWelcomeMessage()}
					<span className="link" onClick={this.handleToggleAppMode}> (Click to Switch Modes)</span>
				</p>
			</div>
		)
	}
}

function mapStateToProps(state){
	return({
		appMode: state.appMode
	})
}

function mapDispatchToProps(dispatch){
	return({
		actions: bindActionCreators(actions, dispatch)
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage)
