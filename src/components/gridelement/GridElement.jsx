import React from 'react';

const GridElement = ({ heading, children }) => {
  return (
    <div className="overviewcard">
      <span>{heading}</span>
      {children}
    </div>
  );
};
export default GridElement;
