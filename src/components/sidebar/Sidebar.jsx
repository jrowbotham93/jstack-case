import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';
import Product from '../product/Product';
import { addToCart } from '../../app/store/actions/cartActions';

class Sidebar extends React.Component {
  addToCart = product => {
    this.props.addToCart(product);
  };

  render() {
    this.props.cartUpdated();

    let total = 0;

    this.props.cart.map(item => (total += item.product.price * item.quantity));
    return (
      <div className="sidenav">
        <div className="sidenav-container">
          <div className="summary">
            <h1>Order Summary</h1>

            {this.props.products.map(product => (
              <div className="product">
                <Product
                  product={product}
                  addToCart={this.addToCart}
                  inCart={
                    this.props.cart.length > 0 &&
                    this.props.cart.filter(e => e.product.id === product.id)
                      .length > 0
                  }
                  key={product.id}
                />
              </div>
            ))}
          </div>
          <div className="giftcard">
            <label htmlFor="giftcard">Giftcard/ Discount code</label>
            <div className="giftcard-input">
              <input
                className="giftcard-item"
                id="giftcard"
                placeholder="gift123"
              ></input>
              <Button label="Apply" styles="button-secondary"></Button>
            </div>
          </div>
          <div className="total">
            <div className="total-table">
              <div className="total-row">
                {this.props.cart.length > 0 ? (
                  <>
                    <span>Items:</span>
                    <span>{this.props.cart.length}</span>
                  </>
                ) : null}
              </div>
              <div className="total-row total-final">
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
