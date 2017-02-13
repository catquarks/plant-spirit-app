import {combineReducers} from 'redux';
import PlantsReducer from './plants_reducer'
import FeelingsReducer from './feelings_reducer'

const rootReducer = combineReducers({
	plants: PlantsReducer,
	feelings: FeelingsReducer
})

export default rootReducer