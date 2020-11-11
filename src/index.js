import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './style.css';

import DefaultRoutes from './layouts/Defaultroutes';
import PageRoutes from './layouts/Pageroutes';

import Header from './components/header/Header';

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

