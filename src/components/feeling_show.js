import React from 'react'

export default function(props){

	function google(term){
		return(
			<a href={`https://www.google.com/#q=${term}`}
				target="_blank"
				>Google</a>
		)
	}

	function alleydog(term){
		return(
			<a href={`https://www.alleydog.com/glossary/definition.php?term=${term}`}
				target="_blank"
				>AlleyDog</a>
		)
	}

	function noSummary(props){
		return(
			<span>
				No summary is currently available. In the meantime, you can click to search&nbsp;
				{google(props.name)} or {alleydog(props.name)}.
			</span>
		)
	}

	return(
		<div id="feeling-show">
			<h3>{props.name}</h3>
			<pre>{props.summary ? props.summary : noSummary(props)}</pre>
		</div>
	)
}