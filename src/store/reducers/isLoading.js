import { REQUEST_DATA, RECEIVE_DATA } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, { type }) => {
	switch (type) {
		case REQUEST_DATA:
			return true;
		case RECEIVE_DATA:
			return false;
		default:
			return state;
	};
};
