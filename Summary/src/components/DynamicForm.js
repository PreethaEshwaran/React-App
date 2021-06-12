import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import formJSON from './formData.json';
import { useState, useEffect } from 'react';


function DynamicForm() {

  const [elements, setElements] = useState(formJSON[0]);

  useEffect(() => {


    const accessories = document.getElementById("classId");
    
    const accessories_btn = document.getElementById("ButtonId");
    accessories_btn.onclick = function () {
      if (accessories_btn.innerHTML === "Vehicle details+") {
        accessories.style.display = "flex";
  

        loadAboutvehicle();
        accessories_btn.innerHTML = "Vehicle details-";
      } else {
        accessories.style.display = "none";
        accessories_btn.innerHTML = "Vehicle details+";
      }
    };
    const accessories1 = document.getElementById("classId1");
    const aboutdriver = document.getElementById("driver");
    const accessories_btn1 = document.getElementById("ButtonId1");
    accessories_btn1.onclick = function () {
      if (accessories_btn1.innerHTML === "Policyholder details+") {
        accessories1.style.display = "flex";
        aboutdriver.style.display = "flex";
        loadAboutPolicyHolder();
        loadDriverdetails();
        
        accessories_btn1.innerHTML = "Policyholder details-";
      } else {
        accessories1.style.display = "none";
        accessories_btn1.innerHTML = "Policyholder details+";
      }
    };
    const accessories2 = document.getElementById("classId2");
    const accessories_btn2 = document.getElementById("ButtonId2");
    accessories_btn2.onclick = function () {
      if (accessories_btn2.innerHTML === "Policy details+") {
        accessories2.style.display = "flex";
        loadAboutPolicy();
        accessories_btn2.innerHTML = "Policy details-";
      } else {
        accessories2.style.display = "none";
        accessories_btn2.innerHTML = "Policy details+";
      }
    };

  }, [])

  //leftExpression ?? rightExpression. It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
  const { fields, fields1, fields2, About_Driver, page_label, Step, page_description } = elements ?? {}


  const loadAboutvehicle = async () => {
    const response = await fetch("https://run.mocky.io/v3/bd1ac163-797c-4e28-a0b0-b9f826ae0a4c");
    const vehicleDetailsData = await response.json();
    console.log(vehicleDetailsData);


    const newElements = { ...elements }
    newElements.fields.forEach(field => {

      if (field.field_id === "car_registration_no") {
        field.field_value = vehicleDetailsData.CarRegistrationNo;
      }

      if (field.field_id === "car_engine_no") {
        field.field_value = vehicleDetailsData.CarEngineNo;
      }
      if (field.field_id === "registration_date") {
        field.field_value = vehicleDetailsData.RegistrationDate;
      }
      if (field.field_id === "chasis_no") {
        field.field_value = vehicleDetailsData.ChasisNo;
      }
      if (field.field_id === "car's_manufacturer") {
        field.field_value = vehicleDetailsData.CarsManufacturer;
      }
      if (field.field_id === "car_model") {
        field.field_value = vehicleDetailsData.CarModel;
      }
      if (field.field_id === "car_modifications") {
        field.field_value = vehicleDetailsData.AnyModificationdoneincar;
      }
      if (field.field_id === "n_cap_rating") {
        field.field_value = vehicleDetailsData.CarsNcapRating;
      }
      setElements(newElements);

    })

  }





  const loadAboutPolicyHolder = async () => {
    const response = await fetch("https://run.mocky.io/v3/afabe36d-06a7-46ff-815f-03b4dac2a07d");
    const vehicleDetailsData = await response.json();
    console.log(vehicleDetailsData);


    const newElements = { ...elements }
    newElements.fields1.forEach(field => {

      if (field.field_id === "Gender") {
        field.field_value = vehicleDetailsData.Gender;
      }

      if (field.field_id === "Policy_holder_Occupation") {
        field.field_value = vehicleDetailsData.PolicyholdersOccupation;
      }
      if (field.field_id === "Policy_holder_Occupation_Industry") {
        field.field_value = vehicleDetailsData.PolicyholderisOccupiedin;
      }
      if (field.field_id === "policy_holder's_other_occupation") {
        field.field_value = vehicleDetailsData.AnyOtherOccupation;
      }
      if (field.field_id === "policy_holder_named_driver_for_the _car") {
        field.field_value = vehicleDetailsData.PolicyholderbeanamedDriverforthecar;
      }
      if (field.field_id === "nominee's_gender ") {
        field.field_value = vehicleDetailsData.Nomineesgender;
      }
      if (field.field_id === "nominee's_date_of_birth ") {
        field.field_value = vehicleDetailsData.Nomineesdateofbirth;
      }
      if (field.field_id === "full name of the minor nominee's appointee_Id") {
        field.field_value = vehicleDetailsData.fullnameoftheminornomineesappointee;
      }
      if (field.field_id === "nominee's relationship with the policy holder_Id") {
        field.field_value = vehicleDetailsData.nomineesrelationshipwithpolicyholder;
      }
      setElements(newElements);

    })

  }
  const loadAboutPolicy = async () => {
    const response = await fetch("https://run.mocky.io/v3/b5c1da4d-68bf-411d-8f29-32963b214435");
    const vehicleDetailsData = await response.json();
    console.log(vehicleDetailsData);


    const newElements = { ...elements }
    newElements.fields2.forEach(field => {

      if (field.field_id === "Policyholder claim Bonus_Id") {
        field.field_value = vehicleDetailsData.NoclaimbonusNCB;
      }

      if (field.field_id === "Policy holder own or use another vehicle_Id") {
        field.field_value = vehicleDetailsData.ownoruseanothervehicle;
      }
      if (field.field_id === "policy holder  no claim bonus currently protected_Id") {
        field.field_value = vehicleDetailsData.noclaimbonuscurrentlyprotected;
      }
      if (field.field_id === "policy holder like to protect his no claim bonus_Id") {
        field.field_value = vehicleDetailsData.protecthisnoclaimbonus;
      }
      if (field.field_id === "policy holder add cover for breakdown_Id") {
        field.field_value = vehicleDetailsData.addcoverforbreakdown;
      }
      if (field.field_id === "policy holder add cover for Electrical accessories_Id ") {
        field.field_value = vehicleDetailsData.addcoverforElectricalaccessories;
      }
      if (field.field_id === "policy holder add cover for non Electrical accessories_Id ") {
        field.field_value = vehicleDetailsData.addcoverfornonelectricalaccessories;
      }
      if (field.field_id === "policy holder add cover for CNG fitment_Id") {
        field.field_value = vehicleDetailsData.addcoverforCNGfitment;
      }
      if (field.field_id === "policy holder add Personal Accident Cover _Id") {
        field.field_value = vehicleDetailsData.addPersonalAccidentCover;
      }
      if (field.field_id === "policy holder add Personal Accident Cover for paid passengers _Id") {
        field.field_value = vehicleDetailsData.addPersonalAccidentCoverforpaidpassengers;
      }
      if (field.field_id === "Nmber of paid passengers _Id") {
        field.field_value = vehicleDetailsData.numberofpaidpassengersyouwanttoadd;
      }
      if (field.field_id === "Insure for each paid passanger _Id") {
        field.field_value = vehicleDetailsData.sumyouwanttoinsure;
      }
      if (field.field_id === "Personal Accident Cover for unnamed passengers_Id") {
        field.field_value = vehicleDetailsData.addPersonalAccidentCoverforunnamedpassengers;
      }
      setElements(newElements);

    })

  }


 const loadDriverdetails = async () => {
    const response = await fetch("https://run.mocky.io/v3/2010e0e1-e406-426d-8e24-206b1e2a1d79");
    const vehicleDetailsData = await response.json();
    console.log(vehicleDetailsData);


    const newElements = { ...elements }
    newElements.About_Driver.forEach(field => {

      if (field.field_id === "Firstname_Id") {
        field.field_value = vehicleDetailsData.Firstname;
      }

      if (field.field_id === "Lastname_Id") {
        field.field_value = vehicleDetailsData.Lastname;
      }
      if (field.field_id === "Contactnumber_Id") {
        field.field_value = vehicleDetailsData.Contactnumber;
      }
      if (field.field_id === "Email_Id") {
        field.field_value = vehicleDetailsData.Email;
      }
      if (field.field_id === "Postalcode_Id") {
        field.field_value = vehicleDetailsData.Postcode;
      }
      if (field.field_id === "Addressline1_Id") {
        field.field_value = vehicleDetailsData.Addressline1;
      }
      if (field.field_id === "Addressline2_Id") {
        field.field_value = vehicleDetailsData.Addressline2;
      }
      // if (field.field_id === "TownCity_Id") {
      //   field.field_value = vehicleDetailsData.Town/City;
      // }
      if (field.field_id === "County_Id") {
        field.field_value = vehicleDetailsData.County;
      }
      if (field.field_id === "Licensetype_Id") {
        field.field_value = vehicleDetailsData.Licensetype;
      }
      setElements(newElements);

    })

  }







  return (

    <div>
      <Form className="container">
        <h5>{Step}</h5>
        <h3>{page_label}</h3>
        <h5>{page_description}</h5>


        <Button id="ButtonId" style={{ margin: '10px' }} className="button">Vehicle details+</Button>

        <Row id="classId" style={{ display: 'none' }} >
          {

            fields.map((field, i) => {
              return (

                <Col lg={4}>


                  <h2>{field.field_label}</h2>
                  <h2 id="fieldvalue">{field.field_value}</h2>

                </Col>

              );
            })

          }
        </Row>
        {'   '}
        <Button style={{ margin: '10px' }} id="ButtonId1" className="button" >Policyholder details+</Button>
        <Row id="classId1" style={{ display: 'none' }} >
          {
         

            fields1.map((field, i) => {
              return (

                <Col lg={4} >



                  <h6 >{field.field_label}</h6>
                  <h2 id="fieldvalue">{field.field_value}</h2>


                </Col>

              );
            })

          }
        </Row>








        <Row id="driver" style={{ display: 'none' }} >
          {

            About_Driver.map((field, i) => {
              return (

                <Col lg={4}>


                  <h2>{field.field_label}</h2>
                  <h2 id="fieldvalue">{field.field_value}</h2>

                </Col>

              );
            })

          }
        </Row>











        {'   '}
        <Button style={{ margin: '10px' }} id="ButtonId2" className="button" >Policy details+</Button>
        <Row lg={4} id="classId2" style={{ display: 'none' }} >
          {

            fields2.map((field, i) => {
              return (

                <Col lg={4} >


                  <h6>{field.field_label}</h6>
                  <h2 id="fieldvalue">{field.field_value}</h2>


                </Col>

              );
            })

          }
        </Row>
        {/* {
             <Row>
          
         fields1.map((field, i) => {
           return(
             
             <Col lg={4}>
      
          
           <h2>{field.field_label}</h2> 
           <h2 id="fieldvalue">{field.field_value}</h2> 
          
           </Col>

           );
             })
           
             }
             </Row> */}

      </Form>
    </div>
  );

}
export default DynamicForm;



