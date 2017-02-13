export default function FeelingsReducer(state=[], action) {
	switch(action.type) {
		case 'FETCH_FEELINGS':
			return action.payload
		default:
			return state
	}
}