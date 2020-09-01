const initialState = {
  products: [
    {
      id: 1,
      name: 'cream1',
      description: 'Meld style and practicality with the Apple',
      price: '649.54',
      image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg',
      amount: 1
    },
    {
      id: 2,
      name: 'Apple MacBook Pro Core i5 2.5GHz 13"',
      description:
        'This MacBook Pro has been professionally restored to working order by an approved vendor',
      price: '339.97',
      image: 'https://i.ebayimg.com/images/g/AbEAAOSw2FJc3cCF/s-l1600.jpg',
      amount: 1
    }
  ]
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
