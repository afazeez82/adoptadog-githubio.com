import axios from 'axios';

export default {    
    getDogs: async function() {        
        const response = await axios.get("http://localhost:3001/api/dog/");
        console.log(response.data);        
        return response.data;   
        
    }
}