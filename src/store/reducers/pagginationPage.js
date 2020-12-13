import { SET_PAGE } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = 1, { type, page }) => {
	switch (type) {
		case SET_PAGE:
			return page ? page : state;
		default:
			return state;
	}
};
