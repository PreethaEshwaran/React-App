import React, { useContext, Fragment, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../App.css';
import { FormContext } from '../FormContext';

function Radio({field_id, field_label, field_placeholder, field_value, field_options, errors}){

    const { handleChange } = useContext(FormContext)

    // useEffect(()=>{
    //     document.getElementById("radio-button-field").addEventListener('click', (e) =>
    //     {
    //         document.getElementById("radio-button-field").style.borderColor="#6F29B8";
    //         document.getElementById("radio-button-field").style.background=" #EEECF0 0% 0% no-repeat padding-box";
    //         document.getElementById("radio-button-field").style.opacity="1";
    //         document.getElementById("radio-button-field").style.color="#6F29B8";
    //     });
    // },[])
    
    return (
        <fieldset>
        <Form.Group>
            <Form.Label>{field_label}</Form.Label><br/>
            <Row>
                {field_options.length > 0 && field_options.map((option, i) =>
                <Fragment key={i} >
                    <Col lg={4}>
                    <Form.Group id="radio-button-field" className="radio-button">
                        <input className="radio-button-input" type="radio" value={option.option_label} checked={field_value === option.option_label} onChange={event => handleChange(field_id, event)} />
                        {' '}{' '}
                        <Form.Label>{option.option_label}</Form.Label>
                    </Form.Group>
                    </Col>

                </Fragment>
            )}
            </Row>
        </Form.Group>
        <span style={{color: "red"}}>{errors ? errors : ""}</span>

        </fieldset>
      );
}

export default Radio;