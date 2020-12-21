import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import setAlert from '../actions/alert';
import { loginWithRedirect } from "@auth0/auth0-react";



const ProtectedRoute = ({
  component: Component,
  auth: { isAuthenticated},
  ...rest
}) => (
  <Route  
    render={props =>
      isAuthenticated ?  (<Redirect to="/adoptionForm" />) : loginWithRedirect()
//      setAlert('You must be logged in', 'danger')
    }
  />
);

ProtectedRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute);