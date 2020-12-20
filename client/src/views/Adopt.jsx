import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DogCard from '../components/DogCard'
import   { getDogs } from '../actions/dogProfiles';
// import HeartCheckbox from 'react-heart-checkbox';

  const Dogs = ({ getDogs, dogs: { dogs } }) => {
    useEffect(() => {
      getDogs();
    }, [getDogs]);

  return (
    < div className="dogs row m-5 mb-5" >
      {dogs.map((dogs) => (
        <DogCard key={dogs._id} dogs={dogs} />
      ))}
        
    </div >)
}
Dogs.propTypes = {
  getDogs: PropTypes.func.isRequired,
  dogs: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  dogs: state.dogs
});
export default connect(mapStateToProps, { getDogs })(Dogs);