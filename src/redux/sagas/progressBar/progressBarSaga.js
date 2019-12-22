import { put, call, takeLatest } from 'redux-saga/effects';
import { 
    GET_DATA_PROGRESS_SUCCESS,
    GET_DATA_PROGRESS_FAILED,
    GET_DATA_PROGRESS_REQUEST
} from '../../actions/actionType';
import { getProgressData } from '../../../core/services/modules/progressBarService';

export function* getProgressDataTask() {
    try {
        const response = yield call(getProgressData);
        if (response.status === 200 && response.data) {
            yield put({
                type: GET_DATA_PROGRESS_SUCCESS,
                payload: response.data
            }) 
        } else {
            yield put({
                type: GET_DATA_PROGRESS_FAILED,
                payload: response.data
            }) 
        }
    } catch (err) {
        yield put({
            type: GET_DATA_PROGRESS_FAILED,
            payload: err
        }) 
    }
}

export function* watchProgress() {
    yield takeLatest(GET_DATA_PROGRESS_REQUEST, getProgressDataTask);
}