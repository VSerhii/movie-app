export const fetchData = async (search) => {
	const response = await fetch(`http://omdbapi.com/?apikey=3ce3b0c7&s=${search}`);
	const data = await response.json();
	if (data.Response === 'True') {
		return data
	} else {
		return null
	}
};

export const fetchDataByPage = async (search, page) => {
	const response = await fetch(`http://omdbapi.com/?apikey=3ce3b0c7&s=${search}&page=${page}`);
	const data = await response.json();
	if (data.Response === 'True') {
		return data;
	} else {
		return null
	}
};


export const fetchMovieDetail = async (id) => {
	const response = await fetch(`http://omdbapi.com/?apikey=3ce3b0c7&i=${id}`);
	const data = await response.json();
	if (data) {
		return data
	} else {
		return null
	}
};