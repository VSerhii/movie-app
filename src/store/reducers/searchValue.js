import { SET_INPUT_VALUE } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = '', { type, value }) => {
	switch (type) {
		case SET_INPUT_VALUE:
			return value;
		default:
			return state;
	}
};
