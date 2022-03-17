import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { getMovieData } from "../Redux/actions";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  // genre
  //id
  //image_url
  //movie_name
  //rating
  //release_date
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.data);
  
  // console.log(movies);
//   const [genre,id,image_url,movie_name,rating,release_date] = movies
// console.log(genre, id, image_url, movie_name, rating, release_date);
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://movie-fake-server.herokuapp.com/data"
    );
    // console.log(response)
    dispatch(getMovieData(response.data));
  };

  // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    fetchMovies();
  }, [dispatch]);

  //    filter by genre
  const handleFilter = (e) => {

    // dispach filterby genre action to the store
  };
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>{
genres.map((gener)=>{
  <option value={gener[0]}>{gener[0]}</option>;
})

      }</select>

      <div className="movies-list">
        {movies.map((movie)=>{
          return (
            <Link to={`/movies/${movie.id}`}>
              <div>
                <h2>
                  {movie.movie_name}
                  <img src={movie.image_url} alt="" />
                  <p>{movie.genre}</p>
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
