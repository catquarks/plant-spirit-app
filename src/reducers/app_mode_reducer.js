export default function AppModeReducer(state='easing_plants', action) {
	switch(action.type) {
		case 'TOGGLE_APP_MODE':
			if (state === 'easing_plants'){
				return 'encouraging_plants'
			} else {
				return 'easing_plants'
			}


		default:
			return state
	}
}