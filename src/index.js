import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch } from 'react-router-dom';

import './style.css';

import DefaultRoutes from './layouts/Defaultroutes';
import PageRoutes from './layouts/Pageroutes';

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <DefaultRoutes path='/' exact={true} component={Home} />
        <PageRoutes path='/contact' exact component={Contact} />
        <DefaultRoutes component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

