import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;




export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "search",
        reviews: []

    }

    handleSearch = (input) => {
        console.log(input)
        const url = URL + '&query=' + input
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                reviews: data.results
                })
               // console.log(this.state.resultsFull.map(review => review.summary_short))
                //this.setState({reviews: this.state.resultsFull.map(review => review.summary_short)})
            })
        }

        handleChange = event => {
            this.setState({
              [event.target.name]: event.target.value
            })
          }
    
          handleSubmit = event => {
            event.preventDefault()
            if (this.state.searchTerm){
            this.handleSearch(this.state.searchTerm)
            }
          } 

    renderResults = () => {

            if(this.state.reviews){
                return <MovieReviews reviews={this.state.reviews} />
            } else {
                return <h2>No movie results found</h2>
            }
        }


    render() {
        return(<div className="searchable-movie-reviews">
            <form onSubmit={event => this.handleSubmit(event)}>
            <div>
              <label>
                Movie Reviews
                <input id="search" name="search" type="text" 
                onChange={event => this.handleChange(event)}
                />
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {this.renderResults()}
        </div>
        )}
}

// Code SearchableMovieReviewsContainer Here
