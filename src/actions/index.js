const baseUrl = 'api/v1'

export function fetchPlants(query){
	const plants = fetch(`${baseUrl}/plants?q=${query}`)
		.then(response => {
			return response.json()
		})
		.then(plants => {
			return plants
		})

	return({
		type: 'FETCH_PLANTS',
		payload: plants
	})
}

export function fetchFeelings(){
	const feelings = fetch(`${baseUrl}/feelings`)
		.then(response => {
			return response.json()
		})
		.then(feelings => {
			return feelings
		})

	return({
		type: 'FETCH_FEELINGS',
		payload: feelings
	})
}