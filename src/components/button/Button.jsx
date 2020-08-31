import React from 'react';

const Button = ({ style, label, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={style}>
      {label}
    </button>
  );
};
export default Button;
