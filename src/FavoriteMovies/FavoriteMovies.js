import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteMoviesFromLocalStorage, toggleFavoriteMovie } from "../store/actions";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
		paddingTop: '56.25%',
	},
});

const FavoriteMovies = () => {
	const classes = useStyles();

	const favoriteMovies = useSelector(state => state.favoriteMovies)
	const dispatch = useDispatch();
	const favoriteMoviesFromLS = JSON.parse(localStorage.getItem('favoriteMovies'))

	useEffect(() => {
		if (Object.keys(favoriteMovies).length === 0 && Object.keys(favoriteMoviesFromLS).length > 0) {
			dispatch(getFavoriteMoviesFromLocalStorage(favoriteMoviesFromLS))
		}
	}, [])

	return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" margin={1}>
			<h1>Favorite movies</h1>
			<Grid container spacing={2} style={{ minHeight: '100vh' }}>
				{
					Object.values(favoriteMovies).map(({ title, poster, id }) => (
						<Grid item xs={2} key={id}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image={poster}
										title={title}
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{title}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary" onClick={() => dispatch(toggleFavoriteMovie(id))}>
										REMOVE
        					</Button>
									<Button size="small" color="primary" component={Link} to={`/movieDetail/${id}`}>
										DETAIl
        					</Button>
								</CardActions>
							</Card>
						</Grid>
					))
				}
			</Grid >
		</Box>
	);
};

export default FavoriteMovies