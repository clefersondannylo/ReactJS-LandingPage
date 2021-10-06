import React from 'react';
import './styles.css';

export function Message() {
  return (
    <div className="WrapperMessage">
      <div className="contentWrapperMessage">
        <div className="boxWrapperMessage">
          <h1>Você conectado com seu fã!</h1>
        </div>
        <div className="boxWrapperMessage">
          <p>
            Somos uma plataforma que permite que celebridades criem seus
            próprios espaços de vendas de colecionáveis e que possam oferecer
            beneficios aos seus fãs. Tudo de forma simples e divertida, sem
            deixar de lado a segurança e transparência do Blockchain.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
