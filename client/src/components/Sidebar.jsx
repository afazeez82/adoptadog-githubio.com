import { Form, Field } from "@leveluptuts/fresh";
import API from "../utils/API";


const dogBreed = [
  "---- Select Breed ----",
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
  "---- Select Age ----",
  "Senior",
  "Adult",
  "Young",
  "Puppy"
];
const gender = [
  "---- Select gender ----",
  "Male",
  "Female",
];
const coatLength = [
  "---- Select Coat Length ----",
  "Short",
  "Medium",
  "Long"
];
const activityLevel = [
  "---- Select Activity Level ----",
  "Low",
  "Normal",
  "High"
];
const specialNeeds = [
  "---- Select Special Need ----",
  "Yes",
  "None"
];

function Sidebar({ filterDogs }) {

  const onSubmit = (data) => {
    console.log(data)
    API.searchDogs(data)
      .then(res => {
        filterDogs(res.data);
      })
      .catch(err => console.log(err))
  }
  return (


    <Form formId="dog-search" onSubmit={onSubmit} >
      <Field type="select" aria-label="Search" name="dogBreed" options={dogBreed} >
        Dog Breed
          </Field>
      <Field type="select" aria-label="Search" name="dogAge" options={dogAge} >
        Dog Age
          </Field>
      <Field type="select" aria-label="Search" name="gender" options={gender} >
        Gender
          </Field>
      <Field type="select" aria-label="Search" name="coatLength" options={coatLength} >
        Coat Length
          </Field>
      <Field type="select" aria-label="Search" name="activityLevel" options={activityLevel} >
        Activity Level
          </Field>
      <Field type="select" aria-label="Search" name="specialNeeds" options={specialNeeds} >
        SpecialNeeds
          </Field>
    </Form>

  )
}



export default Sidebar;
