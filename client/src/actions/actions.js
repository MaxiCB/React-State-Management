import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const GET_SMURFS = "GET_SMURFS";
export const POST_SMURFS = "POST_SMURF";
export const PUT_SMURF = "PUT_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const ERROR = "ERROR";

export const getSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};

export const addSmurf = smurf => {
  const promise = axios.post("http://localhost:3333/smurfs", smurf);
  return dispatch => {
    dispatch({ type: POST_SMURFS }, { type: FETCHING_SMURFS });
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};

export const updateSmurf = (id, smurf) => {
  const promise = axios.put("http://localhost:3333/smurfs/" + id, smurf);
  return dispatch => {
    dispatch({ type: PUT_SMURF }, { type: FETCHING_SMURFS });
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};

export const deleteSmurf = id => {
  const promise = axios.delete("http://localhost:3333/smurfs/" + id);
  return dispatch => {
    dispatch({ type: DELETE_SMURF }, { type: FETCHING_SMURFS });
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};