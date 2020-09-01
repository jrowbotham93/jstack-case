import React from 'react';

const Button = ({ label, onClick, styles }) => {
  return (
    <button onClick={onClick} type="button" className={styles}>
      {label}
    </button>
  );
};
export default Button;
