import { RECEIVE_MOVIE_DETAIL } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, { type, data }) => {
	switch (type) {
		case RECEIVE_MOVIE_DETAIL:
			return data;
		default:
			return state;
	}
};
