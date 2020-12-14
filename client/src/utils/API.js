import axios from 'axios';

export default {
    getDogs: function() {
        return axios.get("/")
    }
}