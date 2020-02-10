import { FETCH_DATA, POST_DATA, UPDATE_SMURFS, SET_ERROR } from "../actions/actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
        isPostingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
