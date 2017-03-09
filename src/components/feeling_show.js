import React from 'react'
import { google, alleydog } from './search_links'

export default function(props){

	function noSummary(props){
		return(
			<span>
				No summary is currently available. In the meantime, try&nbsp;
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