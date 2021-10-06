import React from 'react';
import './styles.css';

export function BoxImage() {
  return (
    <div className="WrapperBoxImage">
      <div className="contentWrapperBoxImage">
        <h1>PRATICIDADE E ACESSIBILIDADE</h1>
      </div>
      <div className="contentWrapperBoxImage">
        <div className="avatar">
          <img src="./user.png" alt="" />
          <h1>
            Crie
            <br /> seu perfil
          </h1>
        </div>
        <div className="avatar">
          <img src="./colecionavel.png" alt="" />
          <h1>
            Crie <br />
            seu colecionável
          </h1>
        </div>
        <div className="avatar">
          <img src="./feira.png" alt="" />
          <h1>
            Publique no seu
            <br /> Espaço Pessoal
          </h1>
        </div>
        <div className="avatar">
          <img src="./megafone.png" alt="" />
          <h1>
            Divulgue
            <br /> sua página
          </h1>
        </div>
      </div>
    </div>
  );
}
