import React, { createContext, useReducer, useContext } from "react";
import {
    GET_DOGS,
    VIEW_CURRENT_DOG,
    // ADD_FAVORITE,
    // UPDATE_FAVORITES,
    // REMOVE_FAVORITE,
    // PAGE_ERROR
  } from "./actions";


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {

    switch (action.type) {
        case GET_DOGS:
            return {
              ...state,
              dogs: action.dog,
              loading: false
            };
        case VIEW_CURRENT_DOG:
            return {
              ...state,
              dogProfile: action.dog,
              loading: false
        };

        // case ADD_FAVORITE:
        //   return {
        //     ...state,
        //     favorites: [action.dog, ...state.favorites],
        //     loading: false
        //   };
      
        // case UPDATE_FAVORITES:
        //   return {
        //     ...state,
        //     favorites: [...state.favorites],
        //     loading: false
        //   };
      
        // case REMOVE_FAVORITE:
        //   return {
        //     ...state,
        //     favorites: state.favorites.filter((dog) => {
        //       return dog._id !== action._id; 
        //     })
        //   };
      
    
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
