import React from 'react'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from './button'

function FeelingDataList(props){
	return(
    <datalist id="feelings">
			{props.feelings.filter(feeling => {
				return props.filterFeeling(feeling)
			})
				.map(feeling => {
					return(
						<option key={feeling.id} value={feeling.name} />
					)
				})
			}
    </datalist>
	)
}

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
			query: e.target.value.toLowerCase()
		})
	}

	getQueriedFeeling(){
		return this.props.feelings.find(
			feeling => {
				return feeling.name.toLowerCase() === this.state.query
			}
		)
	}

	resetQuery(){
		this.setState({query: ''})
	}

	handleSubmit(e){
		e.preventDefault();
		e.stopPropagation();
		this.resetQuery()

		const queriedFeeling = this.getQueriedFeeling()

		if (queriedFeeling === undefined){
			alert('Is there another way to describe your feeling?')
		} else {
			this.props.actions.fetchPlants(
				queriedFeeling.name, this.props.appMode
			)

			this.props.actions.setCurrentFeeling(queriedFeeling)
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
	        <FeelingDataList feelings={this.props.feelings} appMode={this.props.appMode} filterFeeling={this.filterFeeling.bind(this)} />
	        <Button label='Submit' style={{'display': 'inline'}} />
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
