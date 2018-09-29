import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

const Loader = require('react-loader');

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'javascript') =>
    axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=AIzaSyB31J3a8zvdu9rZRSU6FjjE6GrEfdiX3J8&maxResults=6&type=video`) 
      .then(response => {
        this.setState({
          movies: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', Error);
      }
    );

  render() {
    return(
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title"><i className="fa fa-youtube"></i>YouTube SEARCH</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>   
        </div>    
        <div className="main-content">
          {
            this.state.loading ? <Loader/> : <MovieList data={this.state.movies} />
          }
        </div>
      </div>
    );
  }
}

export default App;
