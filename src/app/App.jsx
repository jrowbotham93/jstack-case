import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header, Sidebar, Main } from '../components';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);
console.log(store);

export default function App() {
  return (
    <Provider store={store}>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </Provider>
  );
}
