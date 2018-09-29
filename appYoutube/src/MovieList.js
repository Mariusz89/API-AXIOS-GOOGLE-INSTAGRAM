import React from 'react';
import Movie from './Movie';
import NoMovies from './NoMovies';

const MovieList = props => { 
  const result = props.data;
  let movie;
  if(result.length > 0) {
	movie = result.map((movie, index) => 
	  <Movie url={movie.id.videoId} key={index} title={movie.snippet.title}/>
	); 
  }
  else {
  	movie= <NoMovies />
  }

  return(
    <ul className="movieList">
   		{movie}
    </ul> 
  );
}

export default MovieList;
