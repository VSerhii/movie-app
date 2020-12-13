import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},
});

const MovieCard = ({ title, poster, id }) => {
	const classes = useStyles();

	return (
		<Box boxShadow={3}>
			<Card component={Link} to={`/movieDetail/${id}`} className={classes.root}>
				<CardActionArea>
					<CardMedia image={poster} title={title} className={classes.media} />
					<CardContent >
						<Typography variant="body2" color="textSecondary" component="p" >
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	)
};

export default MovieCard;