const baseUrl = 'https://plant-spirit-app.herokuapp.com/api/v1'

export function toggleAppMode(){
	return({
		type: 'TOGGLE_APP_MODE'
	})
}

export function fetchPlants(query, type){
	const plants = fetch(`${baseUrl}/plants?q=${query}&type=${type}`)
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

export function setCurrentFeeling(feeling){
	return({
		type: 'SET_CURRENT_FEELING',
		payload: feeling
	})
}

export function resetCurrentFeeling(feeling){
	return({
		type: 'RESET_CURRENT_FEELING'
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
