import React from 'react'

export default function FeelingDatalist(props){
	return(
    <datalist id="feelings">
			{props.feelings.filter(feeling => {
				return props.filterFeeling(feeling)
			})
				.map(feeling => {
					return(
						<option key={feeling.id} value={feeling.name} />
					)
				})
			}
    </datalist>
	)
}
