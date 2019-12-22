import { combineReducers } from 'redux';
import progressBarReducer from './progressBar/progressBarReducer';

const rootReducer = combineReducers({
	progress: progressBarReducer,
});

export default rootReducer;
