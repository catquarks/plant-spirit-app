import React from 'react'

	function createSearchLink(href, term, label, className="link", target="_blank"){
		return(
			<a href={`${href}${term}`}
				target={target}
				className={className}
				>{label}</a>
		)
	}

	export function google(term){
		return createSearchLink("https://www.google.com/#q=", term, "Google")
	}

	export function alleydog(term){
		return createSearchLink("https://www.alleydog.com/glossary/definition.php?term=", term, "AlleyDog")
	}
