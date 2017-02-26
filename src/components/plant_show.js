import React from 'react'

export default function(props){
	return(
		<div className="plant-show card">
			<div className="image-area card-image">
				<img src={props.large} target="_blank" />
				<span className="card-title title">{props.name}</span>
			</div>
			<div className="summary-area">
				<p>{props.summary}</p>
			</div>
		</div>
	)
}