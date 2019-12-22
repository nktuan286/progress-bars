import { getEnv } from './envConfig';

export const END_POINT = {
	PROGRESS_BARS: `${getEnv('API_SERVER')}/bars`,
};
