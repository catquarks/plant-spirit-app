import React from 'react'
import { connect } from 'react-redux'
import PlantShow from './plant_show'

class PlantsList extends React.Component {

	render(){
		return(
			<div id="plants-list">
				<div className="plant-show-container">
				{this.props.plants.map(plant => {
					return(
						<PlantShow key={plant.id} name={plant.name} summary={plant.summary} thumb={plant.thumb_pic} medium={plant.medium_pic} large={plant.large_pic} />
					)
				})}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return({
		plants: state.plants,
		currentFeeling: state.currentFeeling
	})
}

export default connect(mapStateToProps)(PlantsList)