import React from 'react'

function createSearchLink(href, term, label, className="link", target="_blank"){
	return(
		<a href={`${href}${term}`}
			target={target}
			className={className}
			>{label}</a>
	)
}

export function GoogleLink(props){
	return createSearchLink("https://www.google.com/#q=", props.term, "Google")
}

export function AlleyDogLink(props){
	return createSearchLink("https://www.alleydog.com/glossary/definition.php?term=", props.term, "AlleyDog")
}
