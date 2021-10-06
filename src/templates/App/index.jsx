import React from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Message } from '../../components/Message';
import { NotebookWrapper } from '../../components/NotebookWrapper';
export function App() {
  return (
    <div style={{ backgroundImage: `url(./background.svg)` }} className="App">
      <Header />
      <Home />
      <div className="AppContainer">
        <Message />
        <BoxWrapper />
        <NotebookWrapper />
      </div>
    </div>
  );
}
