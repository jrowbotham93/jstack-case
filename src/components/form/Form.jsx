import React from 'react';
import Button from '../button/Button';

//TODO form validation

const FormCreditCard = () => (
  <form>
    <div className="flex-column-start">
      <label htmlFor="name">Name on card</label>
      <input
        placeholder="James Rowbotham"
        id="name"
        type="text"
        className="name"
      ></input>
      <label htmlFor="name-on-card">Card number</label>
      <input
        placeholder="1231-1231-3453-3453 "
        id="name-on-card"
        className="name-on-card"
      ></input>
    </div>
    <div className="flex-column-start">
      <label htmlFor="expiration">Expiration</label>

      <div className="expiration-card">
        <input placeholder="12 " id="expiration"></input> &nbsp;
        <input placeholder="31 "></input>
      </div>
    </div>
    <div className="row-card">
      <label htmlFor="cvc">CVC</label>
      <input placeholder="123 " id="cvc"></input>
    </div>
    <Button label="Review order" styles={'button-primary'} />
  </form>
);

export default FormCreditCard;
