import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};

export const postData = (name, age, height) => dispatch => {
    dispatch({ type: POST_DATA });
    axios
      .post("http://localhost:3333/smurfs", {
        name: name,
        age: age,
        height: height,
        id: Date.now()
      })
      .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_SMURFS, payload: res.data });
      })
      .catch(err => {
        console.error("error posting data to api. err: ", err);
        dispatch({ type: SET_ERROR, payload: "error posting data to api" });
      });
  };