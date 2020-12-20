import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getDogById }  from '../actions/dogProfiles';


const DogProfile = ({ getDogById, dogProfile: { dogProfile }, match}) => {
    useEffect(() => {
      getDogById(match.params.id);
    }, [getDogById, match.params.id]);

    return (
        <div className="dogProfile">
                <div className="card" style={{ backgroundColor: "#268E6c", height: "auto"}}>
                    <div className="col-5 m-3">
                        <Link to="/Adopt">← Back to Adoptable Dogs</Link>
                        <img src={dogProfile.dogImage} className="img-circle m-4" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: "center" }}>{dogProfile.dogName}</h5>
                        </div>
                    </div>  

                    <div className="col-5 m-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{dogProfile.dogAge}</li>
                            <li className="list-group-item">{dogProfile.gender}</li>
                            <li className="list-group-item">{dogProfile.dogBreed}</li>
                            <li className="list-group-item">{dogProfile.coatLength}</li>
                            <li className="list-group-item">{dogProfile.activityLevel}</li>
                            <li className="list-group-item">{dogProfile.specialNeeds}</li>
                        </ul> 
                        <p className="card-text" style={{ textAlign: "center" }}>{dogProfile.briefBio}</p>
                    </div>
                </div> 
               {/**</ToggleFavorites >**/}
        </div>
        
    );
};

DogProfile.propTypes = {
    getDogById: PropTypes.func.isRequired,
    dogProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    dogProfile: state.Profile,
  });

export default connect(mapStateToProps, { getDogById })(DogProfile);