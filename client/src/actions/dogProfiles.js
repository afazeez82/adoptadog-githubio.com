import API from '../utils/API';
import setAlert from './alert';

import {
// DOGS
    GET_DOGS,
    VIEW_CURRENT_DOG,
    ADD_DOG,
    UPDATE_DOG,
    DELETE_DOG,
    PAGE_ERROR,
// FAVORITES
//    ADD_FAVORITE,
//    REMOVE_FAVORITE
  } from './index';

// Get ALL Dogs
export const getDogs = () => async dispatch  => {
  try {
    const res = await API.get('/dog');

    dispatch({
      type: GET_DOGS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get the Profile of a SINGLE Dog
  export const getDogById = id => async dispatch => {
    try {
      const res = await API.get(`/dog/${id}`);
  
      dispatch({
        type: VIEW_CURRENT_DOG,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

// Update a Dog Profile
export const updateDog = id => async dispatch => {
  try {
    const res = await API.put(`/dog/${id}`);

    dispatch({
      type: UPDATE_DOG,
      payload: res.data 
    });
  } catch (err) {
    dispatch({
      type: PAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};  

// Add a NEW dog
export const addDog = formData => async dispatch => {
  try {
    const res = await API.post('/dog', formData);

    dispatch({
      type: ADD_DOG,
      payload: res.data
    });

    dispatch(setAlert('New Dog Profile has been added', 'success'));
  } catch (err) {
    dispatch({
      type: PAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete a dog profile after adoption
export const deleteDog = id => async dispatch => {
  try {
    await API.delete(`/dog/${id}`);

    dispatch({
      type: DELETE_DOG,
      payload: id
    });

    dispatch(setAlert('This Dog has been ADOPTED!', 'success'));
  } catch (err) {
    dispatch({
      type: PAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

/* Add to Favorites
export const addFavorite = id => async dispatch => {
  try {
    const res = await API.put(`/dogs/favorite/${id}`);

    dispatch({
      type: ADD_FAVORITE,
      payload: { id, favorite: res.data }
    });
  } catch (err) {
    dispatch({
      type: PAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove from Favorite
export const removeFavorite = id => async dispatch => {
  try {
    const res = await API.delete(`/dogs/favorite/${id}`);

    dispatch({
      type: REMOVE_FAVORITE,
      payload: { id, favorite: res.data }
    });
  } catch (err) {
    dispatch({
      type: PAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
*/