import { httpService } from '../httpService';
import { END_POINT } from '../../configs/apiConfig';

export const getProgressData = () => {
	const url = END_POINT.PROGRESS_BARS;
	const response = httpService._get(url);
	return response;
};
