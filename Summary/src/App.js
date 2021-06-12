
import './App.css';


import React from "react";
import Header from './Component/Header';
import Personal from './Component/Personaldetails';

import Contact from './Component/Contactdetails';

import Other from './Component/Otherdetails';

import Driver from './Component/Driverdetails';

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, ProgressBar, Button } from "react-bootstrap";


export default function App() {
  return (
    <div class="entire">

      <Header />



      <h3 id="title">Personal Details</h3>

      <Personal />





      <h3 id="details">Contact Details</h3>


      <Contact />






      <h3 id="Other"> Other Details</h3>
      <Other />

      <h3 id="driver"> Driver Details</h3>

      <Driver />

    </div>








  );
}





