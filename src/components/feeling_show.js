import React from 'react'
import { google, alleydog } from './search_links'

function Summary(props){
	return(
		<pre>
			{props.summary}
		</pre>
	)
}

function NoSummary(props){
	return(
		<pre>
			No summary is currently available. In the meantime, try
			{google(props.name)} or {alleydog(props.name)}.
		</pre>
	)
}

export default function(props){
	return(
		<div id="feeling-show">
			<h3>{props.name}</h3>
			{props.summary ? <Summary summary={props.summary} /> : <NoSummary name={props.name} />}
		</div>
	)
}
