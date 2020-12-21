import React, { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { VIEW_CURRENT_DOG } from "../utils/actions";
import { Card } from 'react-bootstrap';


const DogProfile = props => {
    const [state, dispatch] = useStoreContext();


    useEffect(() => {
        API.getDogById(props.match.params.id)
            .then(res => { dispatch({ type: VIEW_CURRENT_DOG, dog: res.data }); console.log(state) })
            .catch(err => console.log(err));
    }, []);

    return (
        <>{state.dogProfile ? (
            <Fragment>
                <div className="container">
                    <Card style={{ backgroundColor: "#004179", height: "auto" }}>
                        <Link to="/Adopt" className="p-4" style={{ color: "#CACACA" }}>
                            ← Back to Adoptable Dogs
                        </Link>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <Card.Img src={state.dogProfile.dogImage} className="m-4" alt="..." style={{
                                    height: "auto", width: "300px"
                                }} />
                            </div>
                            <div className="col-5">
                                <Card.Body >
                                    <Card.Title style={{ color: "#CACACA", fontSize: "xx-large" }}>
                                        {state.dogProfile.dogName}
                                    </Card.Title>
                                    <Card.Text>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Age: {state.dogProfile.dogAge}</li>
                                            <li className="list-group-item">Sex: {state.dogProfile.gender}</li>
                                            <li className="list-group-item">Breed: {state.dogProfile.dogBreed}</li>
                                            <li className="list-group-item">Coat Length: {state.dogProfile.coatLength}</li>
                                            <li className="list-group-item">Activity Level: {state.dogProfile.activityLevel}</li>
                                            <li className="list-group-item">Special Needs? {state.dogProfile.specialNeeds}</li>
                                            <li className="list-group-item">{state.dogProfile.briefBio}</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </Fragment>
        ) : (
                <div>loading...</div>
            )
        } </>
    );
};

export default DogProfile;