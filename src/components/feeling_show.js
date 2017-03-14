import React from 'react'
import { GoogleLink, AlleyDogLink } from './search_links'

function FeelingSummary(props){
	return(
		<pre>
			{props.summary}
		</pre>
	)
}

function FeelingNoSummary(props){
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
			{props.summary ? <FeelingSummary summary={props.summary} /> : <FeelingNoSummary name={props.name} />}
		</div>
	)
}
