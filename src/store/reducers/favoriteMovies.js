import { TOGGLE_FAVORITE_MOVIE, GET_FAVORITE_MOVIES_FROM_LOCAL_STORAGE } from "../actions";

const toggleItem = (state, id, poster, title) => {
	const favoriteMoviesLS = JSON.parse(localStorage.getItem('favoriteMovies'));
	if (state[id]) {
		delete state[id]
		if (favoriteMoviesLS[id]) {
			delete favoriteMoviesLS[id]
			localStorage.setItem('favoriteMovies', JSON.stringify({ ...favoriteMoviesLS }))
		}
		return state = { ...state }
	}
	if (!state[id]) {
		localStorage.setItem('favoriteMovies', JSON.stringify({
			...state,
			[id]: {
				id,
				poster,
				title
			}
		}));

		return state = {
			...state,
			[id]: {
				id,
				poster,
				title
			}
		}
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, { type, id, poster, title, data }) => {
	switch (type) {
		case TOGGLE_FAVORITE_MOVIE:
			return toggleItem(state, id, poster, title)
		case GET_FAVORITE_MOVIES_FROM_LOCAL_STORAGE:
			return data
		default:
			return state;
	}
};
