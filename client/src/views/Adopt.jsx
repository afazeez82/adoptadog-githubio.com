import React, { Component } from "react";
// import data from "../data";
// import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";
// import HeartCheckbox from 'react-heart-checkbox';

class Adopt extends Component {


  state = {
    adoptableDogs: []
  }

  componentDidMount() {
    console.log("mounting");
    this.getDogs();
  }

  getDogs = () => {
    API.getDogs()
      .then(res => {
        console.log("getting dogs", res);
        // this.setState({
        //   adoptableDogs: res.data
        // })
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      < div className="dogs row m-5 mb-5" >
        {this.state.adoptableDogs.map(dogs =>
          <Card className="col-2 offset-1 p-2 mb-5">
            <Card.Img variant="top" src={dogs.dogImage} />
            <Card.Body>
              <Card.Title>{dogs.dogName}</Card.Title>
              <Card.Text>
                <div className="dog-breed">{dogs.dogBreed}</div>
                <div className="age">{dogs.dogAge}</div>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>)}
      </div >)
  }
}

export default Adopt;