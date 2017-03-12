import React from 'react'

export default function(props){
	return(
		<div style={props.style}>
	    <button className="waves-effect waves-light btn"
	    	onClick={props.cb}
	  	>
	    	{props.label}
	  	</button>
  	</div>
	)
}
