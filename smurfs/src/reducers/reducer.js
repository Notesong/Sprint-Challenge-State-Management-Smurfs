import { FETCH_DATA, POST_DATA, DELETE_DATA, UPDATE_SMURFS, SET_ERROR } from "../actions/actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  isDeletingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // for the first 3 below, reset smurfs and set is*Data to true
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        smurfs: []
      };
    case POST_DATA:
      return {
        ...state,
        isPostingData: true,
        smurfs: []
      };
    case DELETE_DATA:
      return {
        ...state,
        isDeletingData: true,
        smurfs: []
      };
    // update state data and set is*Data to false
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
        isPostingData: false,
        isDeletingData: false
      };
    // return an error message if API call fails and set is*Data to false
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        isPostingData: false,
        isDeletingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
