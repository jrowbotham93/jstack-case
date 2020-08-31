import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="ErrorMessage">
    <small>{error && error.toString()}</small>
  </div>
);

export default ErrorMessage;
