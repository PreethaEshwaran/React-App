import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactFormInputValidation from 'react-form-input-validation';

export default class StaticForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        first_name: "",
        last_name: ""
      },
      errors: {}
    };

    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        first_name: "required|max: 15",
        last_name: "required|max: 15"
    });
    this.form.onformsubmit = (fields) => {
      console.log(fields);
    }
  }

  render() {
    return (
      <React.Fragment>
      <Form onSubmit={this.form.handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control name="first_name" type="text" placeholder="Enter first name" value={this.state.fields.first_name} onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent}/>
          <span style={{color: "red"}}>
          {this.state.errors.first_name ? this.state.errors.first_name : ""}
          </span>
        </Form.Group>
        <Form.Group >
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="last_name" type="text" placeholder="Enter last name" value={this.state.fields.last_name} onChange={this.form.handleChangeEvent} onBlur={this.form.handleBlurEvent}/>
          <span style={{color: "red"}}>
          {this.state.errors.last_name ? this.state.errors.last_name : ""}
          </span>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </React.Fragment>
    );
  }
}