import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

// fetches data from smurf API and updates page accordingly
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};

// post data to the smurf API and updates page accordingly
export const postData = (name, age, height) => dispatch => {
    dispatch({ type: POST_DATA });
    axios
      .post("http://localhost:3333/smurfs", {
        name: name,
        age: age,
        height: height,
      })
      .then(res => {
        dispatch({ type: UPDATE_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SET_ERROR, payload: "error posting data to api" });
      });
  };

  // deletes data from the smurf API and updates page accordingly
  export const deleteData = (id) => dispatch => {
    dispatch({ type: DELETE_DATA });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: UPDATE_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SET_ERROR, payload: "error deleting data in api" });
      });
  };