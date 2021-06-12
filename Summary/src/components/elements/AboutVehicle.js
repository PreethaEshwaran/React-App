import React from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';
import formJSON from  '../formData.json'
import { useState, useEffect } from 'react';




function AboutVehicle() {

  const [elements, setElements] = useState(formJSON[0]);

 
  //leftExpression ?? rightExpression. It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
  const { fields } = elements ?? {}


  
 

   
  

 

    return (

     <div>
        <Form className="container">
         
<Row>
          {
           
          fields.map((field, i) => {
            return(
              
              <Col lg={4}>
       
           
            <h2>{field.field_label}</h2> 
            <h2 id="fieldvalue">{field.field_value}</h2> 
           
            </Col>

            );
              })
            
              }
              </Row>
            
         
      </Form>
      </div>
    );
  
            } 
  export default AboutVehicle;