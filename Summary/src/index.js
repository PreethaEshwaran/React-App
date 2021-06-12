import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StaticForm from './components/StaticForm';
import DynamicForm from './components/DynamicForm';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <DynamicForm />
  </React.StrictMode>,
  document.getElementById('root')
);
