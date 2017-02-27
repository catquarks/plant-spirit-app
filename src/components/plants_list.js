import React from 'react'
import PlantShow from './plant_show'

export default function(props){
	return(
		<div id="plants-list">
			<div className="plant-show-container">
			{props.plants.map(plant => {
				return(
					<PlantShow key={plant.id} name={plant.name} summary={plant.summary} thumb={plant.thumb_pic} medium={plant.medium_pic} large={plant.large_pic} />
				)
			})}
			</div>
		</div>
	)
}
