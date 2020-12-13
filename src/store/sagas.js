import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import {
	REQUEST_DATA,
	receiveData,
	REQUEST_MOVIE_DETAIL,
	receiveMovieDetail,
	REQUEST_DATA_BY_PAGE,
} from "./actions";
import { fetchData, fetchMovieDetail, fetchDataByPage } from "./api";

function* getMovies(action) {
	try {
		const data = yield call(fetchData, action.search);
		yield put(receiveData(data));
	} catch (e) {
		console.log(e);
	}
}

function* getMoviesByPage(action) {
	try {
		const data = yield call(fetchDataByPage, action.search, action.page);
		yield put(receiveData(data));
	} catch (e) {
		console.log(e);
	}
}

function* getMovieDetail(action) {
	try {
		const data = yield call(fetchMovieDetail, action.id);
		yield put(receiveMovieDetail(data));
	} catch (e) {
		console.log(e);
	}
}

function* moviesSaga() {
	yield takeLatest(REQUEST_DATA, getMovies);
}

function* moviesSagaByPage() {
	yield takeLatest(REQUEST_DATA_BY_PAGE, getMoviesByPage);
}

function* movieDetailSaga() {
	yield takeLatest(REQUEST_MOVIE_DETAIL, getMovieDetail);
}

export default function* rootSaga() {
	yield all([
		fork(moviesSaga),
		fork(movieDetailSaga),
		fork(moviesSagaByPage),
	]);
}