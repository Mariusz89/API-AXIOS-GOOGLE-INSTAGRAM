import React from 'react';

class SearchFrom extends Component {
	render(){
		return(
			<form className="search-form">
		        <label className="is-hidden" htmlFor="search">Search</label>
		        <input 
		        	type="search" 
		            name="search" 
		            placeholder="Search..." 
		        />
		        <button type="submit" id="submit" className="search-button"></button>
      		</form>      
		)
	}
}

export default SearchForm;