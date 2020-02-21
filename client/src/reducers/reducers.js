import {
    FETCHING_SMURFS,
    GET_SMURFS,
    POST_SMURFS,
    PUT_SMURF,
    DELETE_SMURF,
    ERROR
  } from "../actions/actions";
  
  const initialState = {
    intiial: true,
    smurfs: [],
    fetchingSmurfs: false,
    error: ""
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURFS:
        return {
          ...state,
          fetchingSmurfs: true
        };
      case GET_SMURFS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false
        };
      case POST_SMURFS:
        return {
          ...state
        };
      case PUT_SMURF:
        return {
          ...state
        };
      case DELETE_SMURF:
        return {
          ...state
        };
      case ERROR:
        return {
          fetchingSmurfs: false,
          error: "Error!"
        };
      default:
        return state;
    }
  };
  