/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    // Gets all books
    getDogs: function() {
      return axios.get("/api/dog/");
    }
}  