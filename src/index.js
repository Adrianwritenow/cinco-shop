import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import BaseLayout from './components/baseLayout';


// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>

    </BaseLayout>
   </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
