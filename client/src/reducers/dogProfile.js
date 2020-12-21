/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
    GET_DOGS,
    VIEW_CURRENT_DOG,
//    ADD_DOG,
//    UPDATE_DOG,
//    DELETE_DOG,
    PAGE_ERROR,
//  FAVORITES
//    ADD_FAVORITE,
//    REMOVE_FAVORITE
  } from '../actions/index';
  
  // const initialState = {
  //   dogs: [],
  //   dogProfile: null,
  //   loading: true,
  //   error: {}
  // };
  
  export default function(state, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_DOGS:
        return {
          ...state,
          dogs: payload,
        };
      case VIEW_CURRENT_DOG:
        return {
          ...state,
          dogProfile: payload,
        };
/*      case ADD_DOG:
        return {
          ...state,
          dogs: [payload, ...state.dogs],
          loading: false
        };
      case UPDATE_DOG:
        return {
          ...state,
          dogs: state.dogs.map(dogProfile=>
            dog._id === payload.id ? { ...dogProfile} : dog
          ),
          loading: false
        };
      case DELETE_DOG:
        return {
          ...state,
          dogs: state.dogs.filter(dogs=> dogs._id !== payload),
          loading: false
        };
*/
      case PAGE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
} 
  