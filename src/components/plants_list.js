import React from 'react'
import PlantShow from './plant_show'

export default function(props){
	
	function introducePlantRole(){
		if (props.appMode === 'easing_plants'){
			return "Plants that help with this feeling:"
		} else {
			return "Plants that encourage this feeling:"
		}
	}

	return(
		<div id="plants-list">
				<div id="plant-list-title">
					<h3>{introducePlantRole()}</h3>
				</div>
			{props.plants.map(plant => {
				return(
					<PlantShow key={plant.id} name={plant.name}
						summary={plant.summary}
						currentFeelings={plant.current_feelings}
						futureFeelings={plant.future_feelings}
						thumb={plant.thumb_pic} medium={plant.medium_pic}
						large={plant.large_pic} />
				)
			})}
		</div>
	)
}
