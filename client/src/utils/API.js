/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    //DOG
    // Gets all dogs in the database
    getDogs: function() {
      return axios.get("/api/dog/");
    },

    //Gets a Dog by ID for the Profile
    getDog: function(id) {
      return axios.get("/api/dog/" + id);
    },
  
    // Deletes the dog with the given id
    deleteDog: function(id) {
    return axios.delete("/api/dog/" + id);
    },

    // Updates a dogs profile

    // Saves a dogs profile to the database
    createDog: function(formData) {
    return axios.post("/api/dog/", formData);
    },

    /*BLOG
    // Gets all blog posts in the database 
    getPosts: function() {
      return axios.get("/api/blog/");
    },

    //Gets a plog post by ID for the Profile
    getPost: function(id) {
      return axios.get("/api/blog/" + id);
    },
  
    // Deletes the blog post with the given id
    deletePost: function(id) {
    return axios.delete("/api/blog/" + id);
    },

    // Updates a dogs profile

    // Saves a dogs profile to the database
    createPost: function(formData) {
    return axios.post("/api/blog/", formData);
    }

*/
};