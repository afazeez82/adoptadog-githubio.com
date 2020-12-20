import  API from '../utils/API';
import setAlert from './alert';
import {
  ADD_ADOPTER,
  PAGE_ERROR
} from './index'; 

// Add adopter
export const addAdopter = formData => async dispatch => {
    try {
      const res = await API.post('/adopter', formData);
  
      dispatch({
        type: ADD_ADOPTER,
        payload: res.data
      });
  
      dispatch(setAlert('Form Submitted', 'success'));
    } catch (err) {
      dispatch({
        type: PAGE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };