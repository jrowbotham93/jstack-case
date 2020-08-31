import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../app/config/constants/routes';

const Sidenav = () => {
  return (
    <aside className="sidenav" id="sidenav">
      <div className="sidenav__logo">Otherside.</div>

      <ul className="sidenav__list">
        <Link className="sidenav__list-item-link" to={routes.HOME}>
          <li className="sidenav__list-item"> Home</li>
        </Link>
        <Link className="sidenav__list-item-link" to={routes.PAGE1}>
          <li className="sidenav__list-item">Page1 </li>
        </Link>
        <Link className="sidenav__list-item-link" to={routes.PAGE2}>
          <li className="sidenav__list-item">Page2 </li>
        </Link>
        <Link className="sidenav__list-item-link" to={routes.PAGE3}>
          <li className="sidenav__list-item">Page3</li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidenav;
