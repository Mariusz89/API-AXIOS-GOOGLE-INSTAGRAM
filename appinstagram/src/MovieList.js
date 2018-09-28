import React from 'react';
import Movie from './Movie';

const MovieList = props => { 
  const result = props.data;

	let movie = result.map((movie, index) => 
	  	<Movie url={movie.id.videoId} key={index} title={movie.snippet.title}/>
	); 
  return(
    <ul className="movieList">
   		{movie}
    </ul> 
  );
}

export default MovieList;
