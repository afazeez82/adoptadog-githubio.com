import React, { Component } from 'react';
import API from "../utils/API";

class Dogs extends Component {
    state = {
        dogs: []
    };

    compontentDidMount(){
        this.getDogs();
    } 

    getDogs = () => {
        API.getDogs()
        .then(res =>
            this.setState({
                dogs: res.data
            })
            )
            .catch(err => console.log(err));
    }
}

export default Dogs;