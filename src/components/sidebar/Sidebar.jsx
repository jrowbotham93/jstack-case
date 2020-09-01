import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';
import Product from '../product/Product';
import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  removeOneFromCart
} from '../../app/store/actions/cartActions';

class Sidebar extends React.Component {
  addToCart = product => {
    this.props.addToCart(product);
  };
  removeFromCart = product => {
    this.props.removeFromCart(product);
  };
  removeFromCart = product => {
    this.props.removeFromCart(product);
  };
  removeOneFromCart = product => {
    this.props.removeOneFromCart(product);
  };
  render() {
    this.props.cartUpdated();

    let total = 0;
    let tax = 0;
    let shipping = 0;
    let subtotal = 0;

    const taxFromTotal = price => price / 1.06;

    this.props.cart.map(item => {
      tax += item.product.price - taxFromTotal(item.product.price);
      shipping += item.quantity * 2.5;
      subtotal += item.product.price * item.quantity;
      total += item.product.price * item.quantity + shipping;
    });

    return (
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="summary align-text">
            <label>Order Summary</label>
            {this.props.products.map(product => (
              <Product
                product={product}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                removeOneFromCart={this.removeOneFromCart}
                key={product.id}
              />
            ))}
          </div>
          <div className="giftcard flex-column">
            <label htmlFor="giftcard">Giftcard/Discount code</label>
            <div className="giftcard-input flex-row">
              <input
                className="giftcard-item"
                id="giftcard"
                placeholder="gift123"
              ></input>
              <Button label="Apply" styles="button-secondary"></Button>
            </div>
          </div>
          <div className="total flex-column">
            <div className="total-table">
              <div className="total-row flex space-between">
                <span>Subtotal:</span>
                <span>$(${subtotal.toFixed(2)})</span>
              </div>
              <div className="total-row flex space-between">
                <span>Shipping:</span>
                <span>$(${shipping.toFixed(2)})</span>
              </div>
              <div className="total-row flex space-between">
                <span>Tax:</span>
                <span>$(${tax.toFixed(2)})</span>
              </div>
              <div className="total-row flex space-between">
                <span>Items:</span>
                <span>{this.props.cart.length}</span>
              </div>
              <div className="total-row flex space-between total-final">
                <span>Total</span>
                <span>$(${total.toFixed(2)})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    cart: state.cart.cart,
    cartUpdated: () => {
      return true;
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    },
    updateCartQuantity: (productId, quantity) =>
      dispatch(updateCartQuantity(productId, quantity)),
    removeFromCart: productId => dispatch(removeFromCart(productId)),
    removeOneFromCart: productId => dispatch(removeOneFromCart(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
