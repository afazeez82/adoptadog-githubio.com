import React, { useEffect, useState } from 'react';
// import data from "../data";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import API from "../utils/API";
import Sidebar from "./Sidebar";
// import HeartCheckbox from 'react-heart-checkbox';
import Sidebar from "../components/sidebar";

function Adopt() {

  const [dogs, adoptableDogs] = useState([]);

  useEffect(() => {
    loadDogs()
  }, [])

  function loadDogs() {
    API.getDogs()
      .then(res =>
        adoptableDogs(res.data)
      )
      .catch(err => console.log(err));
  }

    function filterDogs(dogs) {
      adoptableDogs(dogs);
    }






  return (
   
    <div className="container">
      <div className="row">
        <div className="col-2">
        <Sidebar filterDogs={filterDogs}></Sidebar>
        </div>
        < div className="col-10" >
          <div className="row m-3">
            {dogs.map(dogs =>

              <Card className="col-3 p-1 m-2 mb-5" style={{ backgroundColor: "#004179" }}>
                <Link to="/DogProfile">
                  <Card.Img variant="top" src={dogs.dogImage} />
                  <Card.Body style={{ color: "#CACACA" }}>
                    <Card.Title>{dogs.dogName}</Card.Title>
                    <Card.Text>
                      <div className="dog-breed">{dogs.dogBreed}</div>
                      <div className="age">{dogs.dogAge}</div>
                    </Card.Text>
                  </Card.Body>
                </Link> </Card>


            )}
          </div>
        </div >
      </div></div>
  )
}

export default Adopt;