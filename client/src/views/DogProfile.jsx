import React, { Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import CurrentDog from '../components/CurrentDog'
import { getDogById } from '../actions/dogProfiles';


const DogProfile = ({ getDogById, dogProfile: { dogProfile, loading }, match }) => {
    useEffect(() => {
        getDogById(match.params.id);
    }, [getDogById, match.params.id]);

    return loading || dogProfile === null ? (
        <Spinner />
    ) : (
            <Fragment>
                <CurrentDog dogProfile={dogProfile} />
            </Fragment>
        );
};

DogProfile.propTypes = {
    getDogById: PropTypes.func.isRequired,
    dogProfile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    dogProfile: state.dogProfile,
});

export default connect(mapStateToProps, { getDogById })(DogProfile);