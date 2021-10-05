import React from 'react';
import './styles.css';

export function Header() {
  return (
    <header>
      <nav className="wrapperNav">
        <a href="#">GoFund NFT</a>
        <a href="#opa">Quem somos</a>
        <button className="buttonWrapper">
          <h1>Logar</h1>
        </button>
      </nav>
    </header>
  );
}
