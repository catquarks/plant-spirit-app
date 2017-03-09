import React from 'react'
import { google } from './search_links'

export default function(props){

	function noSummary(term){
		return(
			<p>
				No summary is currently available. In the meantime, try
				{google(term)}
				for information and images.
			</p>
		)
	}

	return(
		<div className="card plant-show">
			<div className="image-area card-image">
				<img src={props.large} target="_blank" alt={props.name} />
				<span className="card-title title">{props.name}</span>
			</div>
			<div className="summary-area">
				{props.summary ? props.summary : noSummary(props.name)}
			</div>
		</div>
	)
}