import React from 'react'

export default function PlantImageArea(props){
	return(
		<div className="image-area card-image">
			<img src={props.large} target="_blank"
				alt={props.name} 
				onClick={ () => {
					props.handleModalClick('image', props.large, props.name
					)
				}} />
			<span className="card-title title">{props.name}</span>
		</div>
	)
}
