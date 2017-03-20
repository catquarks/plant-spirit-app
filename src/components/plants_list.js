import React from 'react'
import PlantShow from './plant_show'


function PlantRoleTitle(props){
	if (props.appMode === 'easing_plants'){
		return(
			<div id="plant-list-title">
				<h3>Plants that help with this feeling:</h3>
			</div>
		)
	} else {
		return(
			<div id="plant-list-title">
				<h3>Plants that encourage this feeling:</h3>
			</div>
		)
	}
}

export default function(props){
	return(
		<div id="plants-list">
			<PlantRoleTitle appMode={props.appMode} />
				
			{props.plants.map(plant => {
				return(
					<PlantShow key={plant.id} name={plant.name}
						summary={plant.summary}
						currentFeelings={plant.current_feelings}
						futureFeelings={plant.future_feelings}
						thumb={plant.thumb_pic}
						medium={plant.medium_pic}
						large={plant.large_pic}
						imageCreditDesc={plant.image_credit_desc}
						imageCreditUrl={plant.image_credit_url}
					/>
				)
			})}
		</div>
	)
}
