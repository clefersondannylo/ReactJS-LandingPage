import React from 'react';
import './styles.css';

export function ConhecerWrapper() {
  return (
    <div
      style={{ backgroundImage: `url(./fundoconhecer.png)` }}
      className="WrapperConhecer"
    >
      <div className="contentWrapperConhecer">
        <div className="textWrapperConhecer">
          <h1>CONHEÇA NOSSO PROGRAMA DE FAN TOKEN OFFERING (FTO)</h1>
          <p>
            Capitalize sua moeda.
            <br /> Crie e venda tokens não fungíveis.
            <br /> Capte recursos para seu projeto ou empresa.
          </p>
          <p>
            <span>
              O GoTokens é uma solução “as a service” para criação de tokens
              utility de forma simples, rápida e de baixo custo para implementar
              as ideias dos interessados em criar seus próprios tokens.
            </span>
          </p>
        </div>
        <div className="imageWrapperConhecer">
          <img src="./moedas.png" alt="" />
        </div>
      </div>
      <button className="buttonWrapperConhecer">
        <h1>Conhecer GoFund NFT</h1>
      </button>
    </div>
  );
}
