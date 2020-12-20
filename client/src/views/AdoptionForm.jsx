import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Form, Button, FormControl } from "react-bootstrap";
import setAlert from '../actions/alert';
import { addAdopter } from '../actions/adopter';


const AdoptionForm = ({ addAdopter }) => {

  const [formData, setFormData] = useState({
    currentDate: '',
    dogName: '',
    contactName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    altPhone: '',
    email: '',
    individualsResiding: '',
    agreement: '',
    ownRent: '',
    landlord: '',
    landlordPhone: '',
    homeDescription: '',
    experience: '',
    petSurrender: '',
    currentPetDescription: '',
  /*  hoursAlone: '',
    hoursTogether: '',
    dogKept: '',
    dogSleep: '',
    dogTraining: '',
    vet: '',*/
  });

  const onChange = x => setFormData({...formData, [x.target.name]: x.target.value})
/*create onSubmit function*/ 
  const onSubmit = x => {
      x.preventDefault();
//      if ({/*null */}) {
//        setAlert('You must enter all mandatory fields', 'danger')
//      } else {
        addAdopter({ formData });
        setFormData([]);
        console.log({ formData, setFormData });
//clear form
 };
  

  return (

  <Fragment>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
        <h1>Adoption Application</h1>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form className="form" onSubmit={x => onSubmit(x)}>

{/*Name*/} 
          <Form.Row>
          <Form.Group as={Col} controlId="formGridName1">
            <Form.Label for="name">Selected Dog's Name</Form.Label>
            <FormControl name="dogName" value={formData.DogName} onChange ={x => onChange(x)} placeholder="Dog's name here"></FormControl>
          </Form.Group>

            <Form.Group as={Col} controlId="formGridName2">
              <Form.Label>Your Name</Form.Label>
              <Form.Control name="contactName" value={formData.contactName} onChange ={x => onChange(x)} placeholder="Your Name Here" />
            </Form.Group>
          </Form.Row>

{/*Address Block*/} 
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" value={formData.address} onChange ={x => onChange(x)} placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control name="address2" value={formData.address2} onChange ={x => onChange(x)} placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" value={formData.city} onChange ={x => onChange(x)}/>
            </Form.Group>
{/*Grab value from dropdown, create state array */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose..." name="state" value={formData.state} onChange ={x => onChange(x)}>
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control name="zip" value={formData.zip} onChange ={x => onChange(x)}/>
            </Form.Group>
          </Form.Row>

{/*Phone and Email*/} 
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone1">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone"  value={formData.phone} onChange ={x => onChange(x)} placeholder="Phone Number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone2">
              <Form.Label>Alt. Phone Number</Form.Label>
              <Form.Control name="altPhone" value={formData.altPhone} onChange ={x => onChange(x)} placeholder="Alt. Phone Number" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email"  value={formData.email} onChange ={x => onChange(x)} placeholder="name@example.com" />
          </Form.Group>

{/*Living Arrangement*/}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please tell us a little about the people who reside with you.  What are their relationships to you? Are there children in the house?  What ages?</Form.Label>
            <Form.Control as="textarea" rows={5} name="individualsResiding" value={formData.individualsResiding} onChange ={x => onChange(x)}/>
          </Form.Group>
{/*Grab value of checkbox */}
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" name="agreement" value={formData.agreement} onChange ={x => onChange(x)} label="Please check if everyone in your home is in agreement on adoption" />
          </Form.Group>
{/*Grab value from radios */}
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>Do you:</Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Own"
                  name="own"
                  value={formData.own} onChange ={x => onChange(x)}
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Rent"
                  name="rent"
                  value={formData.rent} onChange ={x => onChange(x)}
                  id="formHorizontalRadios2"
                />  
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group controlId="formGridContact1">
            <Form.Label>Renters, please supply us with contact info for your landlord.</Form.Label>
            <Form.Control name="landlord" value={formData.landlord} onChange ={x => onChange(x)} placeholder="Landlord Name" />
          </Form.Group>

          <Form.Group controlId="formGridContact2">
            <Form.Control name= "landlordPhone" value={formData.landlordPhone} onChange ={x => onChange(x)} placeholder="Landlord Phone" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Please tell us a little about your home and yard. Is your yard fenced? How high is the fence?</Form.Label>
            <Form.Control as="textarea" rows={5} name="homeDescription"  value={formData.homeDescription} onChange ={x => onChange(x)}/>
          </Form.Group>

{/*Experience Owning Pets*/}
          <Form.Group controlId="exampleForm.ControlTextarea3">
            <Form.Label>Please describe any previous experience you have had owning pets.</Form.Label>
            <Form.Control as="textarea" rows={5}  name="experience" value={formData.experience} onChange ={x => onChange(x)}/>
          </Form.Group>
{/*Radios again */}
          <Form.Row>
            <Form.Group id="formGridCheckbox">
              <Form.Label>Have you ever had to surrender a pet to a rescue or a shelter?</Form.Label>
              <Form.Check type="radio" label="Yes" />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="radio" label="No" />
            </Form.Group>
            <Form.Text className="text-muted">
              This does not necessarily exclude you from consideration.
            </Form.Text>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea4">
            <Form.Label>Do you have any current pets? Dogs? Cats? Ages?</Form.Label>
            <Form.Control as="textarea" rows={5}  name="currentPetDescription" value={formData.currentPetDescription} onChange ={x => onChange(x)}/>
          </Form.Group>


{/*

Hours alone
Hours together
dog kept
dog slept
dog train
vet

*/}

          <Button variant="primary" type="submit" >
            Submit
          </Button>

        </Form>
      </Col>
    </Row>
   </Fragment> 
  )
  
}

AdoptionForm.propTypes = {
  setAlert: PropTypes.func.isRequired, 
  addApdopter: PropTypes.func.isRequired
};

export default connect(null, { setAlert, addAdopter })(AdoptionForm);
