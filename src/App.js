import React from 'react';
import PropTypes from "prop-types";

const movieILike = [
  {
    id:1,
    name: "About Time",
    image: 
    "https://img.moviepostershop.com/about-time-movie-poster-2013-1020755468.jpg",
    rating: 4.3
  },
  {
    id:2,
    name: "The Note Book",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/81zHy%2BInA5L._SY679_.jpg",
    rating: 4.8
  },
  {
    id:3,
    name: "The Divil Wears Prada",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/61XJX0b81aL._SY679_.jpg",
    rating: 3.7
  },
  {
    id:4,
    name:"BirdMan",
    image:
    "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/no604-my-birdman-minimal-movie-poster-chungkong-art.jpg",
    rating: 4.2
  }
];


function Movie({name, image, rating}){
  return (<div>
    <h2>{name}</h2>
    <p>{rating}/5</p>
    <img src={image} alt ={name}/>
    
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
    return (
    <div>
    {movieILike.map(
      movie => (
        <Movie key = {movie.id} name={movie.name} image={movie.image} rating = {movie.rating}/>
      )
    )}
    </div>
    );
}

export default App;
