import React from "react";
//import form autofill library?
import { Row, Col, Form, Input, Button } from "react-bootstrap";


export const AdoptionForm = props => {
  return (
  <div>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
        <h1>Adoption Application</h1>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form>

          <Form.Group>
            <Form.Label for="name">Please enter the name of the dog you would like to be considered for adoption.</Form.Label>
            <Input name="name" placeholder="Dog's name here"></Input>
          </Form.Group>

{/*Name*/} 
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

{/*Address Block*/} 
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

{/*Phone and Email*/} 
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone2">
              <Form.Label>Alt. Phone Number</Form.Label>
              <Form.Control type="alt" placeholder="Alt. Phone Number" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

{/*Living Arrangement*/}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please tell us a little about the people who reside with you.  What are their relationships to you? Are there children in the house?  What ages?</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Please check if everyone in your home is in agreement on adoption" />
          </Form.Group>

          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>Do you:</Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Own"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Rent"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />  
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group controlId="formGridContact1">
            <Form.Label>Renters, please supply us with contact info for your landlord.</Form.Label>
            <Form.Control placeholder="Landlord Name" />
          </Form.Group>

          <Form.Group controlId="formGridContact2">
            <Form.Control placeholder="Landlord Phone" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea2">
            <Form.Label>Please tell us a little about your home and yard. Is your yard fenced? How high is the fence?</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

{/*Experience Owning Pets*/}
          <Form.Group controlId="exampleForm.ControlTextarea3">
            <Form.Label>Please describe any previous experience you have had owning pets.</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

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
            <Form.Control as="textarea" rows={5} />
          </Form.Group>


{/*Current Pet

Hours alone
Hours together
dog kept
dog slept
dog train
vet

            <Form.Check type="radio" aria-label="own" />
            <Form.Check type="radio" aria-label="rent" />
*/}

          <Button variant="primary" type="submit">
            Submit
          </Button>


        </Form>
      </Col>
    </Row>
   </div> 
  )
  }
