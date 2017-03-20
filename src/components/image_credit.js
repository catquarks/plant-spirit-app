import React from 'react'

export default function(props){
	if (props.desc){
		return(
			<div className="image-credit">
				<em>
					<strong>Image credit:&nbsp;</strong>
					<a href={props.url}
						target="_blank"
						className="link"
					>
						{props.desc}
					</a>
				</em>
			</div>
		)
	} else {
		return(
			<div>
				<em>No image credit is available.</em>
			</div>
		)
	}
}