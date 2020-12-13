export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const REQUEST_MOVIE_DETAIL = 'REQUEST_MOVIE_DETAIL';
export const RECEIVE_MOVIE_DETAIL = 'RECEIVE_MOVIE_DETAIL';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const REQUEST_DATA_BY_PAGE = 'REQUEST_DATA_BY_PAGE';
export const SET_PAGE = "SET_PAGE"
export const TOGGLE_FAVORITE_MOVIE = "TOGGLE_FAVORITE_MOVIE"
export const GET_FAVORITE_MOVIES_FROM_LOCAL_STORAGE = "GET_FAVORITE_MOVIES_FROM_LOCAL_STORAGE";

export const requestData = (search) => ({ type: REQUEST_DATA, search });
export const requestDataByPage = (search, page) => ({ type: REQUEST_DATA_BY_PAGE, search, page });
export const receiveData = (data) => ({ type: RECEIVE_DATA, data });

export const requestMovieDetail = (id) => ({ type: REQUEST_MOVIE_DETAIL, id });
export const receiveMovieDetail = (data) => ({ type: RECEIVE_MOVIE_DETAIL, data });

export const setInputValue = (value) => ({ type: SET_INPUT_VALUE, value });
export const setPagginationPage = (page) => ({ type: SET_PAGE, page });

export const toggleFavoriteMovie = (id, poster, title) => ({ type: TOGGLE_FAVORITE_MOVIE, id, poster, title });
export const getFavoriteMoviesFromLocalStorage = (data) => (
	{
		type: GET_FAVORITE_MOVIES_FROM_LOCAL_STORAGE,
		data,
	}
)