import React, { useEffect, Fragment } from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import { useParams } from "react-router-dom";
import { requestMovieDetail, toggleFavoriteMovie } from "../store/actions";
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
	table: {
		maxWidth: 600,
	},
	iconActive: {
		color: 'red',
	},
	iconDisabled: {
		color: 'grey'
	}
});

const MovieDetail = () => {
	const classes = useStyles()
	const { id } = useParams();
	const dispatch = useDispatch();
	const movieDetail = useSelector(state => state.movieDetail);
	const favoriteMovies = useSelector(state => state.favoriteMovies)

	useEffect(() => dispatch(requestMovieDetail(id)), [id]);

	if (!movieDetail) {
		return <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />
	}

	const { Title, Poster, Ratings } = movieDetail

	return (
		<Container maxWidth="lg">
			<Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" height="60px">
				<h1>{Title}</h1>
				<IconButton onClick={() => dispatch(toggleFavoriteMovie(id, Poster, Title))}>
					<FavoriteIcon className={favoriteMovies && favoriteMovies[id] ? classes.iconActive : classes.iconDisabled} />
				</IconButton>
			</Box>
			<Box display="flex" flexDirection="row" justifyContent="space-around">
				<Box display="flex" flexDirection="column">
					<img src={Poster} alt="Movie Name" />
					<span>Ratings</span>
					{
						Ratings.map(rating => (
							<Fragment key={rating.Source}>
								<span>{rating.Source}</span>
								<span>{rating.Value}</span>
							</Fragment>
						))
					}
				</Box>
				<Box>
					<TableContainer >
						<Table className={classes.table}>
							<TableBody>
								{
									Object.keys(movieDetail).map((name) => name !== 'Poster' && name !== 'Ratings' && (
										<TableRow key={name}>
											<TableCell component="th" scope="row">
												{name}
											</TableCell>
											<TableCell align="right">{movieDetail[name]}</TableCell>
										</TableRow>
									))
								}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</Container>
	)
}

export default MovieDetail