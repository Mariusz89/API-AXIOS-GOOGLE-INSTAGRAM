import React, { Component } from 'react';

class SearchForm extends Component {

	render(){
		return(
			<form className="search-form" onSubmit = {this.handleSubmit}>
		        <label className="is-hidden" htmlFor="search">Search</label>
		        <input 
		        	type="search" 
		            name="search" 
		            onChange = {this.changeForm}
		            placeholder="Search..." 
		        />
		        <button type="submit" id="submit" className="search-button"><i className="fa fa-search"></i></button>
      		</form>      
		)
	}
}

export default SearchForm;