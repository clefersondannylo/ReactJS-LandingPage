import React from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
export function App() {
  return (
    <div style={{ backgroundImage: `url(./background.svg)` }} className="App">
      <Header />
      <Home />
    </div>
  );
}
