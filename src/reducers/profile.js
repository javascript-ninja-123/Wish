import { combineReducers } from 'redux';
import { ProfileActionTypes } from '../actions/types';


const initialState = {
  results: [],
  isLoading: false,
  error: null
};

const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {

    case ProfileActionTypes.FETCH_KID_PROFILE_LOADING:
      return true;

    case ProfileActionTypes.FETCH_KID_PROFILE_FULFILLED:
    case ProfileActionTypes.FETCH_KID_PROFILE_FAILED:
      return false;

    default:
      return state;
  }
}

const error = (state = initialState.error, action) => {
  switch (action.type) {
    
    case ProfileActionTypes.FETCH_KID_PROFILE_FAILED:
      return action.error;

    default:
      return state;
  }
}

const results = (state = initialState.results, action) => {
  switch (action.type) {

    case ProfileActionTypes.FETCH_KID_PROFILE_LOADING:
    case ProfileActionTypes.FETCH_KID_PROFILE_FAILED:
      return [];

    case ProfileActionTypes.FETCH_KID_PROFILE_FULFILLED:
      return action.payload.data; //TODO: send response

    default:
      return state;
  }
}

export default combineReducers({ results, isLoading, error });