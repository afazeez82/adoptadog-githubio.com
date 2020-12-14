import React from "react";
import PropTypes from 'prop-types';

class Adopt extends React.Component {
  state = {
    breed: '',
    age: "0",
    gender: null,
    coatLength: null,
    favorite: null,
    activityLevel: null,
    specaiaNeed: null,
    // breeds: [],
  }

  handleChange = (e) => {
    console.log('value:', e.target.value)
    console.log('options:', e.target.options)
    console.log('type:', e.target.type)
    let value = e.target.value
    if(e.target.type === 'number') {
      value = parseInt(e.target.value)
    }

    this.setState({[e.target.breed]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const dog = {
      breed: this.state.breed,
      age: this.state.age,
      gender: this.state.gender,
      coatLength: this.state.coatLength,
      favorite: this.state.favorite,
      activityLevel: this.state.activityLevel,
      specialNeed: this.state.specialNeed,
      // breeds: this.state.breeds,
      createdAt: new Date(),
      createdBy: "kamtodo"
    }

    if (dog.breed) {
      this.props.createNewDog(dog)
    } else {
      alert('Please fix all errors. ')
    }
  }

  render() {
    return (
      <form className="create-dog-wrapper" onSubmit={this.handleSubmit}>

        <div>
          <label>Dog's Breed:</label>

          <select name="breeds" defaultValue={[]} required multiple>
            <option value="1c3b58ee-2fc7-40ad-bde2-99361373f0ec">Dalmatian</option>
            <option value="2ec3b80a-b1c4-4cc6-b0c5-f3d20e574eaa">Maltese</option>
            <option value="8a1ca2e2-13fc-4c6d-9944-5b102b04d287">Poodle</option>
          </select>
        </div>

        <div>
          <label>Age:</label><input type="number" name="ageInYears" placeholder="(Years)" min="0" max="30" onChange={this.handleChange}/> and
          <input type="number" name="ageInMonths" placeholder="(Months)" min="0" max="11" onChange={this.handleChange}/>
        </div>

        <div>
          <label>Gender:</label>
          <select name="gender" defaultValue="" required onChange={this.handleChange}>
            <option disabled value=""> -- select an option -- </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Coat Length:</label>
          <select name="" defaultValue="" required onChange={this.handleChange}>
            <option disabled value=""> -- select an option -- </option>
            <option value="Double-Coated Dogs">Double-Coated Dogs</option>
            <option value="Curly-Coated Dogs">Curly-Coated Dogs</option>
            <option value="Long-Coated Dogs">Long-Coated Dogs</option>
            <option value="Wire-Haired Dogs">Wire-Haired Dogs</option>
          </select>
        </div>
      

        <div>
          <label>Body Condition:</label>
          <select name="bodyCondition" defaultValue="" required onChange={this.handleChange}>
            <option disabled value=""> -- select an option -- </option>
            <option value="underweight">Underweight</option>
            <option value="correct_weight">Correct Weight</option>
            <option value="overweight">Overweight</option>
          </select>
        </div>

        <div>
          <label>Activity Level:</label>
          <select name="activityLevel" defaultValue="" required onChange={this.handleChange}>
            <option disabled value=""> -- select an option -- </option>
            <option value="low_activity">Low Activity</option>
            <option value="normal_activity">Normal Activity</option>
            <option value="high_activity">High Activity</option>
          </select>
        </div>

        <div>
          <label>Favorite:</label><input type="text" name="name" placeholder="Favorite" required onChange={this.handleChange}/>
        </div>

        <div>
          <button type="submit">Create New Dog</button>
        </div>
      </form>
    )
  }
}

Adopt.propTypes = {
  createNewDog: PropTypes.func.isRequired
}


export default Adopt;