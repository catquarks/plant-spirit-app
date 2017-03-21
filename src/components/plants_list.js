import React from 'react'
import PlantShow from './plant_show'
import EaseOrEncourage from './ease_or_encourage'

function PlantRoleTitle(props){
	return(
		<div id="plant-list-title">
			<h3>Plants that { <EaseOrEncourage appMode={props.appMode} /> } this feeling:</h3>
		</div>
	)
}

export default function(props){
	
	function plantsExist(plants){
		if (plants.length > 0){
			return true
		} else {
			return false
		}
	}

	if (plantsExist(props.plants)){
		return(
			<div id="plants-list">
				<PlantRoleTitle appMode={props.appMode} />
					
				{props.plants.map(plant => {
					return(
						<PlantShow key={plant.id}
							name={plant.name}
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
	} else {
		return (
			<div id="plants-list">
				<div id="no-plant-list-title">
					<h3>
						No plants in our database { <EaseOrEncourage appMode={props.appMode} /> } this feeling.
					</h3>
				</div>
			</div>
		)
	}
}
