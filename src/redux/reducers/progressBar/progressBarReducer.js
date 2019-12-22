import {
    GET_DATA_PROGRESS_REQUEST,
    GET_DATA_PROGRESS_SUCCESS,
    GET_DATA_PROGRESS_FAILED
} from '../../actions/actionType';

const defaultState = {
	dataSuccess: null,
	dataError: null,
	isError: false,
    isLoading: false,
    isSuccess: false
};

const progressBarReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_DATA_PROGRESS_REQUEST: {
			return {
				...state,
                isLoading: true,
                dataSuccess: null,
                dataError: null,
                isError: false,
                isSuccess: false
			};
		}
		case GET_DATA_PROGRESS_SUCCESS: {
			return {
				...state,
				dataSuccess: action.payload,
                dataError: null,
                isError: false,
                isLoading: false,
                isSuccess: true
			};
		}
		case GET_DATA_PROGRESS_FAILED: {
			return {
				...state,
				dataSuccess: null,
                dataError: action.payload,
                isError: true,
                isLoading: false,
                isSuccess: false
			};
		}
		default:
			return state;
	}
};

export default progressBarReducer;
