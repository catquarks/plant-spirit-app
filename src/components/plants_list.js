import React from 'react'
import {connect} from 'react-redux'

class PlantsList extends React.Component {

	render(){
		if (this.props.plants.message){
			return(
				<div className="PlantsList">
					{this.props.plants.message}
				</div>
			)
		} else {

			return(
				<div className="plantsList">
					{this.props.plants.map(plant => {
						return(
							<p>{plant.name}</p>
						)
					})}
				</div>
			)

			
		}
	}
}

function mapStateToProps(state){
	return({
		plants: state.plants
	})
}

export default connect(mapStateToProps)(PlantsList)