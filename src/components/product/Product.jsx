import React, { Component } from 'react';

class Product extends Component {
  state = {
    inCart: this.props.inCart,
    count: 0
  };

  addToCart = e => {
    e.preventDefault();

    this.props.addToCart(this.props.product);

    this.setState({
      inCart: true,
      count: this.state.count + 1
    });
  };

  removeFromCart = e => {
    e.preventDefault();
    this.props.removeFromCart(this.props.product.id);

    this.setState({
      inCart: true,
      count: this.state.count - 1
    });
  };

  removeOneFromCart = e => {
    e.preventDefault();
    this.props.removeOneFromCart(this.props.product.id);

    this.setState({
      inCart: true,
      count: this.state.count - 1
    });
  };
  render() {
    const { product } = this.props;

    return (
      <div className="product flex space-between">
        <div className="flex space-evenly ">
          <img src={product.image} />
          <div className="flex-start product">
            <p className="title">{product.name}</p>
            <p className="desc">{product.description.substring(0, 60)}...</p>
            <div className="flex-row-start space-between">
              <div className="counter" onClick={this.removeOneFromCart}>
                -
              </div>

              <div>{this.state.count}</div>
              <div className="counter" onClick={this.addToCart}>
                +
              </div>
              <span>${product.price}</span>
            </div>
          </div>
        </div>

        <button className="flex" onClick={this.removeFromCart}>
          X
        </button>
      </div>
    );
  }
}

export default Product;
