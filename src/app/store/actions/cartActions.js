export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      product,
      quantity: 1
    }
  };
};

export const removeFromCart = productId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      productId
    }
  };
};

export const removeOneFromCart = productId => {
  return {
    type: 'REMOVE_ONE_FROM_CART',
    payload: {
      productId
    }
  };
};

export const updateCartQuantity = (productId, quantity) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    payload: {
      productId,
      quantity: quantity
    }
  };
};

export const updateCartPrice = (productId, price) => {
  return {
    type: 'UPDATE_CART_PRICE',
    payload: {
      productId,
      price: price
    }
  };
};
