import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";

const SmurfForm = props => {
  const stringRex = /^[^\\\/&]*$/;

  let nameState = '';
  let ageState = '';
  let heightState = '';

  let newSmurf = {
    name: "",
    age: "",
    height: ""
  };

  let editing = props.editing;
  let current = props.current;
  let smurfs = props.smurfs;

  const changeName = e => {
    if (stringRex.test(e.target.value)) {
      nameState = "has-success";
      newSmurf.name = e.target.value;
    } else {
      nameState = "has-danger";
    }
  };

  const changeAge = e => {
    if (stringRex.test(e.target.value)) {
      ageState = "has-success";
      newSmurf.age = e.target.value;
    } else {
      ageState = "has-danger";
    }
  };

  const changeHeight = e => {
    if (stringRex.test(e.target.value)) {
      heightState = "has-success";
      newSmurf.height = e.target.value;
    } else {
      heightState = "has-danger";
    }
  };

  const addSmurf = e => {
    e.preventDefault();
    if(nameState, ageState, heightState === 'has-success') {
        let add = props.addSmurf;
        add(newSmurf);
    } else {
        console.log('Form Error')
    }
  };

  const editSmurf = e => {
      console.log(
          props.current
      )
  }

  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Smurf Name:
        </Label>
        <Col sm={8}>
          <Input
            type="name"
            name="name"
            id="name"
            onChange={e => changeName(e)}
            valid={nameState === "has-success"}
            invalid={nameState === "has-danger"}
            placeholder={(editing ? props.current : '')}
          />
          <FormFeedback valid>That's a good name!</FormFeedback>
          <FormFeedback invalid>Uh-oh that won't work</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Age:
        </Label>
        <Col sm={8}>
          <Input
            type="number"
            name="number"
            id="number"
            onChange={e => changeAge(e)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Height:
        </Label>
        <Col sm={8}>
          <Input name="height" id="height" onChange={e => changeHeight(e)} />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 8, offset: 2 }}>
          <Button onClick={e => ( editing ?  editSmurf(e) : addSmurf(e))}>{( editing ?  'Update' : 'Add')}</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default SmurfForm;
