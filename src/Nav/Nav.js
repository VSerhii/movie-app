import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { requestData, setInputValue } from "../store/actions";
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const HomeIcon = (props) => (
	<SvgIcon {...props}>
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
	</SvgIcon>
);

const styles = theme => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: "flex"
	},
});

const Nav = ({ classes }) => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const searchValue = useSelector(state => state.searchValue);
	const favoriteMovies = useSelector(state => state.favoriteMovies)
	const favoriteMoviesFromLS = JSON.parse(localStorage.getItem('favoriteMovies'))

	const searchSubmit = (event) => {
		event.preventDefault();
		dispatch(requestData(searchValue))
	}

	return (
		<div className={classes.grow}>
			<AppBar position="static" style={{ background: 'black' }}>
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						Movie app
            </Typography>
					{
						pathname === '/' && (
							< form
								noValidate
								autoComplete="off"
								onSubmit={searchSubmit}
								style={{
									display: 'flex',
									justifyContent: "center",
								}}
							>
								<div className={classes.search}>
									<div className={classes.searchIcon}>
										<SearchIcon />
									</div>
									<InputBase
										placeholder="Search…"
										value={searchValue}
										onChange={(event) => dispatch(setInputValue(event.target.value))}
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput
										}}
										inputProps={{ "aria-label": "search" }}
									/>
								</div>
								<Button
									type="submit"
									variant="outlined"
									style={{
										background: 'inherit',
										color: 'inherit',
										borderColor: 'white',
										marginLeft: '10px'
									}}
								>
									SEARCH
        				</Button>
							</form>
						)
					}
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{
							pathname !== '/' && (
								<IconButton color="inherit" component={Link} to={'/'}>
									<HomeIcon />
								</IconButton>
							)
						}
						{
							pathname !== '/favorite' && (
								<IconButton
									aria-label="show 17 new notifications"
									color="inherit"
									component={Link} to={'/favorite'}
								>
									<Badge badgeContent={
										Object.keys(favoriteMovies).length > 0
											? Object.keys(favoriteMovies).length
											: Object.keys(favoriteMoviesFromLS).length
									}
										color="secondary">
										<FavoriteIcon />
									</Badge>
								</IconButton>
							)
						}
					</div>
				</Toolbar>
			</AppBar>
		</div >
	);
}

export default withStyles(styles)(Nav);
