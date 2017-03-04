import React from 'react'
import {connect} from 'react-redux'
import PlantsList from './plants_list'
import FeelingShow from './feeling_show'

class Results extends React.Component {

	render(){
		return(
			<div id="results">
				<FeelingShow key={this.props.currentFeeling.id} name={this.props.currentFeeling.name} summary={this.props.currentFeeling.summary} appMode={this.props.appMode} />
				<PlantsList plants={this.props.plants} appMode={this.props.appMode} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return({
		plants: state.plants,
		currentFeeling: state.currentFeeling,
		appMode: state.appMode
	})
}

export default connect(mapStateToProps)(Results)