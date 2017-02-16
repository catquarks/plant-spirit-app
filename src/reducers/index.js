import {combineReducers} from 'redux';
import PlantsReducer from './plants_reducer'
import FeelingsReducer from './feelings_reducer'
import CurrentFeelingReducer from './current_feeling_reducer'
import AppModeReducer from './app_mode_reducer'

const rootReducer = combineReducers({
	plants: PlantsReducer,
	feelings: FeelingsReducer,
	currentFeeling: CurrentFeelingReducer,
	appMode: AppModeReducer
})

export default rootReducer