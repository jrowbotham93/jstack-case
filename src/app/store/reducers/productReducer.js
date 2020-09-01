const initialState = {
  products: [
    {
      id: 1,
      name: 'VIZIO D-Series D24F-F1 24" Full HD Smart TV ',
      description:
        'VIZIO D-Series D24F-F1 24" Full HD LED Smart TV. Condition is Manufacturer refurbished',
      price: '104.99',
      image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg',
      amount: 1
    },
    {
      id: 2,
      name: 'Canon EOS M50 Mirrorless Camera Body',
      description:
        '2160p UHD Video Recording, Built-in Flash, Body only, Auto Focus, AE/FE Lock, Tripod Thread',
      price: '450.00',
      image: 'https://i.ebayimg.com/images/g/2tQAAOSwnhldR6hD/s-l640.jpg',
      amount: 1
    }
  ]
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
