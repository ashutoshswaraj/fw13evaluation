
import { GET_MOVIES, SELECTED_MOVIE } from "./actionTypes";

// thunk call to fetch movie list
export const getMovieData = (payload) => ({
    type: GET_MOVIES,
    payload:payload
});


export const selectedMovieData = (payload) => ({
  type: SELECTED_MOVIE,
  payload: payload,
});

// action object for filter  feature

const filterByGenre = () => ({});
