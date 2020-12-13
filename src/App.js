import React from 'react';
import Container from '@material-ui/core/Container';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './Home/Home';
import MovieDetail from './MovieDetail/MovieDetail';
import Nav from './Nav/Nav';
import FavoriteMovies from './FavoriteMovies/FavoriteMovies'

const App = () => {
	return (
		<Container maxWidth="xl" style={{ height: '100%', margin: 0, padding: 0 }}>
			<Router>
				<Nav />
				<Switch>
					<Route path="/movieDetail/:id?">
						<MovieDetail />
					</Route>
					<Route path="/favorite">
						<FavoriteMovies />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
