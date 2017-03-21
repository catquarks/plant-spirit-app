import React from 'react'

export default function(props){
	return(
		<div className="image-modal">
			<img src={props.src} alt={props.alt} />
		</div>
	)
}
