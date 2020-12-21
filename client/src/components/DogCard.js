import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import AdoptButton from './AdoptButton'

const  DogCard = ({
    dog: { dogImage, dogName, dogBreed, dogAge },
}) => (
    <Fragment>
    <Card className="col-2 offset-1 p-2 mb-5">
        <Card.Img variant="top" src={dogImage} />
            <Card.Body>
                <Card.Title>{dogName}</Card.Title>
                <Card.Text>
                    <div className="dog-breed">{dogBreed}</div>
                    <div className="age">{dogAge}</div>
                </Card.Text>
                <AdoptButton />
            </Card.Body>
    </Card>
    </Fragment>
);

DogCard.propTypes = {
    dog: PropTypes.object.isRequired,
};

export default DogCard;