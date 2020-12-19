/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    // Gets all books
    getDogs: function() {
      return axios.get("/api/dog/");
    },
    searchDogs: function(filters) {
      const filterKeys = Object.keys(filters);
      const queryString = filterKeys.reduce((accum, key) => {
        // if prop has value and isn't placeholder string
        if (filters[key] && !filters[key].includes('----')) {
          return `${accum}${key}=${filters[key]}&`
        }
        return accum
      }, '?')
      return axios.get(`/dog${queryString}`);
      // http:localhost:3001/dog?dogBreed=Havanese&dogAge=Senior&gender=Male&coatLength=Medium&activityLevel=Low&specialNeeds=Yes

    }

    
}  