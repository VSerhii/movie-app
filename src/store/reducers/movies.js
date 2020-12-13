import { RECEIVE_DATA } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, { type, data }) => {
	switch (type) {
		case RECEIVE_DATA:
			return ({
				data: data?.Search || null,
				totalResults: data?.totalResults || null,
			});
		default:
			return state;
	};
};
