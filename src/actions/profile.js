import { ProfileActionTypes } from 'actions/types';

export const fetchKidProfile = (payload) => (
  {
    type: ProfileActionTypes.FETCH_KID_PROFILE,
    payload
  });

export const fetchKidProfileFulfilled = (payload) => (
  {
    type: ProfileActionTypes.FETCH_KID_PROFILE_FULFILLED,
    payload
  });

export const fetchKidProfileFailed = (error) => (
  {
    type: ProfileActionTypes.FETCH_KID_PROFILE_FAILED,
    error
  });

export const fetchKidProfileLoading = () => (
  {
    type: ProfileActionTypes.FETCH_KID_PROFILE_LOADING
  });