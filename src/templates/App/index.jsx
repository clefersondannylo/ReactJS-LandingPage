import React from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Message } from '../../components/Message';
import { NotebookWrapper } from '../../components/NotebookWrapper';
import { BoxImage } from '../../components/BoxImage';
import { ConhecerWrapper } from '../../components/ConhecerWrapper';
import { Footer } from '../../components/Footer';
export function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(./background.svg)` }} className="App">
        <Header />
        <Home />
        <div className="AppContainer">
          <Message />
          <BoxWrapper />
          <NotebookWrapper />
          <BoxImage />
          <ConhecerWrapper />
        </div>
      </div>
      <footer>
        <div
          style={{ backgroundImage: `url(./fundofooter.png)` }}
          className="WrapperFooter"
        ></div>
      </footer>
    </>
  );
}
