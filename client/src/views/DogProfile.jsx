/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { VIEW_CURRENT_DOG } from "../utils/actions";


const DogProfile = props => {
  const [state, dispatch] = useStoreContext();


  useEffect(() => {
    API.getDogById(props.match.params.id)
      .then(res => dispatch({ type: VIEW_CURRENT_DOG, dog: res.data }))
      .catch(err => console.log(err));
  }, []);

  
  return (
    <>{state.dogProfile ? (
        <Fragment>
        <div className="dogProfile">
<div className="card" style={{ backgroundColor: "#268E6c", height: "auto"}}>
  <div className="col-5 m-3">
      <Link to="/Adopt">← Back to Adoptable Dogs</Link>
      <img src={state.dogProfile.dogImage} className="img-circle m-4" alt="..." />
      <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>{state.dogProfile.dogName}</h5>
      </div>
  </div>  

  <div className="col-5 m-3">
      <ul className="list-group list-group-flush">
          <li className="list-group-item">{state.dogProfile.dogAge}</li>
          <li className="list-group-item">{state.dogProfile.gender}</li>
          <li className="list-group-item">{state.dogProfile.dogBreed}</li>
          <li className="list-group-item">{state.dogProfile.coatLength}</li>
          <li className="list-group-item">{state.dogProfile.activityLevel}</li>
          <li className="list-group-item">{state.dogProfile.specialNeeds}</li>
      </ul> 
      <p className="card-text" style={{ textAlign: "center" }}>{state.dogProfile.briefBio}</p>
  </div>
  </div> 
  </div>
  </Fragment>
        )  : (
            <div>loading...</div>
        )} </>
  );
};

export default DogProfile;