import React from 'react'

export default function(props){
	return(
		<div className="plant-show card-panel">
			<h3>{props.name}</h3>
			<p>{props.summary}</p>
		</div>
	)
}