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
		this.props.actions.fetchPlants(this.state.query)
	}

	render(){
		return(
			<div className="FeelingForm">
	     	<form onSubmit={this.handleSubmit}>
	        <input type="text" name="feeling" value={this.state.query} onChange={this.handleChange} />
	        <input type="submit" className="waves-effect waves-light btn" />
	      </form>
				<div className="available-feelings">
				{this.props.feelings.filter(feeling => {

					return (this.state.query === "") || (feeling.name.includes(this.state.query.toLowerCase()))})
						.map(feeling => {
							return(
									<p key={feeling.id}>{feeling.name}</p>
							)
				})}

				</div>

      </div>
		)
	}

}

function mapStateToProps(state){
	return({
		feelings: state.feelings
	})
}

function mapDispatchToProps(dispatch){
	return({
		actions: bindActionCreators(actions, dispatch)
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(FeelingForm)
