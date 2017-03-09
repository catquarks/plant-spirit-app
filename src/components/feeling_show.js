import React from 'react'

export default function(props){

	return(
		<div id="feeling-show">
			<h3>{props.name}</h3>
			<pre>{props.summary}</pre>
		</div>
	)
}