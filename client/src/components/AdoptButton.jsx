import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  setAlert  from '../actions/alert';
import PropTypes from 'prop-types';

import {useAuth0} from '@auth0/auth0-react'

const AdoptButton = () => {
    
    const { isAuthenticated } = useAuth0();

    return (
        <button className="btn btn-primary btn-block" onClick={() => isAuthenticated ?  (<Redirect to="/adoptionForm" />) : setAlert('You must be logged in', 'danger')}
       >
          ADOPT ME
        </button>
      );
    
};
  

AdoptButton.propTypes = {
    setAlert: PropTypes.func.isRequired 
  };
  
export default connect(null, { setAlert })(AdoptButton);
  