export default function PlantsReducer(state=[], action) {
	switch(action.type) {
		case 'FETCH_PLANTS':
			return action.payload
		default:
			return state
	}
}