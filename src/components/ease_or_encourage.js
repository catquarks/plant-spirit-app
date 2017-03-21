import React from 'react'

export default function(props){
	if (props.appMode === 'easing_plants'){
		return(
			<span>
				alleviate
			</span>
		)
	} else {
		return(
			<span>
				promote
			</span>
		)
	}
}
