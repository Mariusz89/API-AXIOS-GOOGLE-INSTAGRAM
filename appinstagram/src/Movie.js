import React from 'react';

const Movie = props => (
	<li className="movie-wrap">
    	<iframe src= {`https://www.youtube.com/embed/${props.url}`} style={{width: 300, height:250}} title={props.title}></iframe>
  	</li>
);

export default Movie;
	

	


