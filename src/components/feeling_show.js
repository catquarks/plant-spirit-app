import React from 'react'

export default function(props){

	function introducePlantRole(){
		if (props.appMode === 'easing_plants'){
			return "Plants that help with this feeling:"
		} else {
			return "Plants that encourage this feeling:"
		}
	}

	return(
		<div className="feeling-show">
			<h3>{props.name}</h3>
			<p><strong>Summary: </strong>{props.summary}</p>
			<h3><strong>{introducePlantRole()}</strong></h3>
		</div>
	)
}