import React, { createContext, useReducer, useContext } from "react";
import {
    GET_DOGS,
    VIEW_CURRENT_DOG,
    PAGE_ERROR
  } from "./actions";


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_DOGS:
            return {
              ...state,
              dogs: action.post,
              loading: false
            };
        case VIEW_CURRENT_DOG:
            return {
              ...state,
              dogProfile: action.post,
              loading: false
        };
        case PAGE_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
            };
    
      default:
        return state;
      }
    };




const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    dogs: [],
    dogProfile: { 
        dogImage: '', 
        dogName: '',
        dogAge: '', 
        gender: '', 
        dogBreed: '', 
        coatLength: '', 
        activityLevel: '', 
        specialNeeds: '', 
        briefBio: '' 
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
