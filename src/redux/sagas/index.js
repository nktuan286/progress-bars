import { all } from 'redux-saga/effects';
import { watchProgress } from './progressBar/progressBarSaga';

export default function* rootSaga() {
	yield all([
		watchProgress(),
	]);
}
