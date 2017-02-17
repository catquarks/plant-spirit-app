import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './feeling_form.css'

class FeelingForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			query: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e){
		this.setState({
			query: e.target.value
		})

	}

	handleSubmit(e){
		e.preventDefault();
		e.stopPropagation();

		const result = this.props.feelings.find(feeling => {
			return feeling.name === this.state.query
		})

		if (result === undefined){
			alert('Is there another way to describe your feeling?')
		} else {
			this.props.actions.fetchPlants(this.state.query, this.props.appMode)
		}
	}

	render(){
		return(
			<div className="FeelingForm">
	     	<form onSubmit={this.handleSubmit}>
	        <input list="feelings" name="feeling" value={this.state.query} onChange={this.handleChange} />

	        <datalist id="feelings">
					{this.props.feelings.filter(feeling => {

						return (feeling.name.includes(this.state.query))})
							.map(feeling => {
								return(
									<option key={feeling.id} value={feeling.name} />
								)
					})}
	        	
	        </datalist>
	        <input type="submit" className="waves-effect waves-light btn" />
	      </form>
      </div>
		)
	}

}

function mapStateToProps(state){
	return({
		feelings: state.feelings,
		appMode: state.appMode
	})
}

function mapDispatchToProps(dispatch){
	return({
		actions: bindActionCreators(actions, dispatch)
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(FeelingForm)
