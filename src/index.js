import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<

// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import LifeStyle from './components/lifeStyle';
import Appliances from './components/appliances';
import Electronics from './components/electronics';
import BaseLayout from './components/baseLayout';
import Explorer from './components/explorer';
import Details from './components/details';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
       <Switch>
        <Route path="/appliances" component={Appliances}/>
         <Route path="/electronics" component={Electronics}/>
         <Route path="/lifestyle" component={LifeStyle}/>
         <Route path="/details/:endpoint/:id" component={Details}/>
         <Route exact path="/" component={Explorer}/>
       </Switch>
    </BaseLayout>
   </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
