import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import style from './StudentForm.module.css'
import NavBar from '../NavBar/NavBar';


export default function StudentForm() {
  const [validated, setValidated] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    navigate("/")
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <NavBar />
    <div className={style.container}>
    <Form className={style.Form} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={{color:"white"}}>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label style={{color:"white"}}>Email id</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>Mobile No</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Number"
              required
            />
          </InputGroup>
        </Form.Group>

      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}l>Parent Contact  No</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder="Number"
              aria-describedby="9304376077"
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>Gender</Form.Label>
          <InputGroup hasValidation>
            <select className={style.gender}>
              <option>
                male
              </option>
              <option>
                Female
              </option>
            </select>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>Courses</Form.Label>
          <InputGroup hasValidation>
            <select className={style.gender}>
              <option>
                Java
              </option>
              <option>
                JavaScript
              </option>
              <option>
                Python
              </option>
            </select>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label style={{color:"white"}}>DOB</Form.Label>
          <InputGroup hasValidation>
          <Form.Control
              type="date"
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label style={{color:"white"}}>Adhaar No</Form.Label>
          <Form.Control type="text" placeholder="Adhaar No" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label style={{color:"white"}}>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label style={{color:"white"}}>Father Name</Form.Label>
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label style={{color:"white"}}>Mother Name</Form.Label>
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>
        </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button className={style.btn} type="submit">Submit form</Button>
    </Form>
    </div>
    </>
  );
}

