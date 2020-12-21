import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CurrentDog = ({
    dogProfile: { dogImage, dogName, dogAge, gender, dogBreed, coatLength, activityLevel, specialNeeds, briefBio },

  }) => (
      <Fragment>
          <div className="dogProfile">
<div className="card" style={{ backgroundColor: "#268E6c", height: "auto"}}>
    <div className="col-5 m-3">
        <Link to="/Adopt">← Back to Adoptable Dogs</Link>
        <img src={dogImage} className="img-circle m-4" alt="..." />
        <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>{dogName}</h5>
        </div>
    </div>  

    <div className="col-5 m-3">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{dogAge}</li>
            <li className="list-group-item">{gender}</li>
            <li className="list-group-item">{dogBreed}</li>
            <li className="list-group-item">{coatLength}</li>
            <li className="list-group-item">{activityLevel}</li>
            <li className="list-group-item">{specialNeeds}</li>
        </ul> 
        <p className="card-text" style={{ textAlign: "center" }}>{briefBio}</p>
    </div>
    </div> 
        {/**</ToggleFavorites >**/}
    </div>
    </Fragment>
);

CurrentDog.propTypes = {
    dogProfile: PropTypes.object.isRequired,
  };
  

  
  export default CurrentDog;