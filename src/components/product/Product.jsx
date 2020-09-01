import React, { Component } from 'react';
import Button from '../button/Button';

class Product extends Component {
  state = {
    inCart: this.props.inCart
  };

  addToCart = e => {
    e.preventDefault();

    this.props.addToCart(this.props.product);

    this.setState({
      inCart: true
    });
  };

  removeFromCart = e => {
    e.preventDefault();
    this.props.removeFromCart(this.props.product.id);
  };
  removeOneFromCart = e => {
    e.preventDefault();
    this.props.removeOneFromCart(this.props.product.id);
  };
  render() {
    const { product } = this.props;

    return (
      <div className="col-md-3">
        <figure className="card card-product">
          <div className="img-wrap">
            <img src={product.image} />
          </div>
          <figcaption className="info-wrap">
            <h4 className="title">{product.title}</h4>
            <p className="desc">{product.description}</p>
          </figcaption>
          <div className="bottom-wrap">
            <div className="counter" onClick={this.addToCart}>
              +
            </div>

            <div className="counter" onClick={this.removeOneFromCart}>
              -
            </div>
            <button onClick={this.removeFromCart}>Delete item</button>

            <div className="price-wrap h5">
              <span className="price-new">${product.price}</span>
            </div>
          </div>
        </figure>
      </div>
    );
  }
}

export default Product;
