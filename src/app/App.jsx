import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../scss/index.scss';

import { Header, Footer, Sidenav } from '../components';
import { Page1, Page2, Page3 } from '../modules';

import * as routes from './config/constants/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <div className="grid-container">
            <Header />
            <Sidenav />
            <Route exact path={routes.PAGE1} component={() => <Page1 />} />
            <Route path={routes.PAGE2} component={() => <Page2 />} />
            <Route exact path={routes.PAGE3} component={() => <Page3 />} />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
