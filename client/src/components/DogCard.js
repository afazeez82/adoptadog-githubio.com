import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AdoptButton from './AdoptButton';
import { Link } from 'react-router-dom';

const  DogCard = ({
    dog: { dogImage, dogName, dogBreed, dogAge },
}) => (
    <Fragment>
        <Card className="col-3 p-1 m-3 mb-5" style={{ backgroundColor: "#004179" }}>
            <Link to="/DogProfile">
                <Card.Img variant="top" src={dogImage} />
                <Card.Body style={{ color: "#CACACA" }}>
                    <Card.Title>{dogName}</Card.Title>
                        <Card.Text>
                            <div className="dog-breed">{dogBreed}</div>
                            <div className="age">{dogAge}</div>
                        </Card.Text>
                </Card.Body>
            </Link> 
        </Card>
    </Fragment>
);

DogCard.propTypes = {
    dog: PropTypes.object.isRequired,
};

export default DogCard;