import React from 'react'

export default function(props){

	return(
		<div id="feeling-show">
			<h3>{props.name}</h3>
			<p>{props.summary}</p>
		</div>
	)
}