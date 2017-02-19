import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class FeelingForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			query: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.filterFeeling = this.filterFeeling.bind(this)
	}

	handleChange(e){
		this.setState({
			query: e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		e.stopPropagation();
		this.setState({query: ''})

		const queriedFeeling = this.props.feelings.find(feeling => {
			return feeling.name === this.state.query
		})

		if (queriedFeeling === undefined){
			alert('Is there another way to describe your feeling?')
		} else {
			this.props.actions.fetchPlants(this.state.query, this.props.appMode)

			const currentFeeling = this.props.feelings.find(feeling => {
				return feeling.name === this.state.query
			})
			this.props.actions.setCurrentFeeling(currentFeeling)
		}
	}

	filterFeeling(feeling){
		if (feeling[this.props.appMode].length > 0){
			return feeling.name.includes(this.state.query)

		}
	}

	render(){
		return(
			<div id="feeling-form">
	     	<form onSubmit={this.handleSubmit}>
	        <input type="text" list="feelings" name="feeling" value={this.state.query} onChange={this.handleChange} autoFocus />

	        <datalist id="feelings">
					{this.props.feelings.filter(feeling => {
						return this.filterFeeling(feeling)
							})
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
