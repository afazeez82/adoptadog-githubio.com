import React, { Component } from "react";
import { Form, Field } from "@leveluptuts/fresh";


const onSubmit = (data) => console.log(data);
const dogBreed = [
"Pointer",
"Pug",
"Havanese",
"Silky Terrier",
"Border Collie",
"Golden Retriever",
"Golden Doodle",
"Maltese",
"Shih Tzu"
];
const dogAge = [
  "Adult",
  "Senior",
  "Young",
  "Puppy"
];
const dogGender = [
  "Male",
  "Female",
];
const coatLength = [
  "Short",
  "Medium",
  "Long"
];
const activityLevel = [
  "Low",
  "Normal",
  "High"
];
const specialNeeds = [
  "Yes",
  "None"
];

class Sidebar extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      newUser: {
        breed: "",
        age: "",
        gender: "",
        coatLength: "",
        activityLevel: "",
        specaiaNeeds: ""
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("/api/dog", {
      method: 'POST',
      body: data,
    });
  }

  render() {
        return (

          
          <Form formId="dog-search" onSubmit={onSubmit}>
            
           <Field type="select" aria-label="Search" options={dogBreed}>
            Dog Breed
          </Field>
          <Field type="select" aria-label="Search" options={dogAge}>
            Dog Age
          </Field>
          <Field type="select" aria-label="Search" options={dogGender}>
            Gender
          </Field>
          <Field type="select" aria-label="Search" options={coatLength}>
            Coat Length
          </Field>
          <Field type="select" aria-label="Search" options={activityLevel}>
            Activity Level
          </Field>
          <Field type="select" aria-label="Search" options={specialNeeds}>
            SpecialNeeds
          </Field>
        </Form>
         
        )
      }
    }
export default Sidebar;
