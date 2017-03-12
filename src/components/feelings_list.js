import React from 'react'

export default function(props){
	return(
		<div className="feelings-list">
			<strong>{props.title}</strong>
			<ul>
			{props.feelings.map(feeling => {
				return(
					<li key={feeling.id}>{feeling.name}</li>
				)
			})}
			</ul>
		</div>
	)
}
