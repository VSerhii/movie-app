
import { combineReducers } from "redux";
import movies from "./movies";
import movieDetail from './movieDetail';
import searchValue from './searchValue';
import pagginationPage from './pagginationPage';
import favoriteMovies from './favoriteMovies';
import isLoading from './isLoading'

export default combineReducers({
	movies: movies,
	movieDetail: movieDetail,
	searchValue: searchValue,
	pagginationPage: pagginationPage,
	favoriteMovies: favoriteMovies,
	isLoading: isLoading,
});