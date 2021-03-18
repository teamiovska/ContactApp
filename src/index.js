import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './Components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/index.css';


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>, 
document.getElementById("root"))
