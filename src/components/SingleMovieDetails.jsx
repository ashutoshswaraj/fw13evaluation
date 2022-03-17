import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import {selectedMovieData} from "../Redux/actions"
export const SingleMovieDetails = () => {
const { MovieId } = useParams();
console.log(MovieId)
  const movies = useSelector((state) => state.data);
  // console.log(movies)
// const { image, title, price, category, description } = movies;
const dispatch = useDispatch();

const fetchMovietDetail = async (id) => {
  const response = await axios
    .get(`https://movie-fake-server.herokuapp.com/data/${MovieId}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
  dispatch(selectedMovieData(response.data));
};
   useEffect(() => {
     if (MovieId && MovieId !== "") fetchMovietDetail(MovieId);
    
   }, [MovieId]);

  // make a request to get the details
  return (
    <>
      <div>
        <h2>
          {movies.movie_name}
          <img src={movies.image_url} alt="" />
          <p>{movies.genre}</p>
        </h2>
      </div>
    </>
  );
};
