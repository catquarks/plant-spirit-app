import React from 'react'
import { GoogleLink, AlleyDogLink } from './search_links'

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
			No summary is currently available. In the meantime, try&nbsp;
			<GoogleLink term={props.name} />
			&nbsp;or&nbsp;
			<AlleyDogLink term={props.name} />
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
