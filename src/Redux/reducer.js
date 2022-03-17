import { GET_MOVIES, SELECTED_MOVIE } from "./actionTypes";


const initState = {
    data:[],
    filterData:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions

  switch (type) {
    case GET_MOVIES:
      return { ...state, data: payload };
    case SELECTED_MOVIE:
      return { ...state,data:payload };
    default:
      return state;
  }
};