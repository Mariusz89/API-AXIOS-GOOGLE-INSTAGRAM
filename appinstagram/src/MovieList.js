import React from 'react';
import Movie from './Movie';

const MovieList = props => {   
  return(
    <ul className="movieList">
   		<Movie />
    </ul> 
  );
}

export default MovieList;