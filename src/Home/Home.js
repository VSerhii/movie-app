import React from 'react'
import { requestDataByPage, setPagginationPage } from "../store/actions";
import { useDispatch, useSelector } from 'react-redux'
import Grid from "@material-ui/core/Grid";
import MovieCard from './MovieCard'
import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
	const dispatch = useDispatch();
	const movies = useSelector(state => state.movies?.data);
	const isLoading = useSelector(state => state.isLoading)
	const totalResults = useSelector(state => state.movies?.totalResults);
	const searchValue = useSelector(state => state.searchValue);
	const page = useSelector(state => state.pagginationPage)

	const handlePagginationPageChange = (event, value) => {
		dispatch(setPagginationPage(value))
		dispatch(requestDataByPage(searchValue, value))
	}

	const getPagesForPaggination = () => {
		if (Number(totalResults) % 1 !== 0) {
			return Number(totalResults) / 10
		} else return Math.floor(Number(totalResults) / 10) + 1
	}

	const renderContent = () => {
		if (!isLoading && !movies) return <h1 style={{ position: 'absolute', top: '50%', left: '40%' }}>No results found </h1>
		if (isLoading) {
			return <CircularProgress style={{ position: 'absolute', top: '50%', right: '50%' }} />
		} else {
			return (
				<>
					<Grid container spacing={2} style={{ minHeight: '100vh' }}>
						{
							movies.map(item => (
								<Grid item xs={4} key={item.imdbID}>
									<MovieCard title={item.Title} poster={item.Poster} id={item.imdbID} />
								</Grid>
							))
						}
					</Grid >
					<Pagination
						count={getPagesForPaggination()}
						onChange={handlePagginationPageChange}
						page={page}
						style={{
							display: 'flex',
							justifyContent: "center",
						}}
					/>
				</>
			)
		}
	}
	return (
		<Box display="flex" flexDirection="column" justifyContent="center" margin={1}>
			{renderContent()}
		</Box>
	)
}

export default Home;