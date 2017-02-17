export default function CurrentFeelingReducer(state={name: null}, action) {
	switch(action.type) {
		case 'SET_CURRENT_FEELING':
			return action.payload
		case 'RESET_CURRENT_FEELING':
			return {name: null}
		default:
			return state
	}
}