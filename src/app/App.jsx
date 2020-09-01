import React from 'react';
import { Header, Sidebar, Main } from '../components';

export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}
