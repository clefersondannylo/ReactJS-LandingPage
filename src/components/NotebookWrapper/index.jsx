import React from 'react';
import './styles.css';

export function NotebookWrapper() {
  return (
    <div className="WrapperNotebook">
      <div className="contentWrapperNotebook">
        <img src="./notebook.png" alt="notebook ligado" />
      </div>
      <div className="contentWrapperNotebook">
        <div className="boxWrapperNotebook">
          <h1>SEU ESPAÇO PESSOAL DE VENDA</h1>
          <h1>Conheça nossas exclusividades</h1>
        </div>
        <div className="boxWrapperNotebook">
          <div className="boxWrapperNotebookText">
            <img src="./check.png" alt="" />
            <p>
              Na plataforma GoNFT você não precisa conhecer nem ter uma carteira
              de crypto externa. Aqui ela é criada automáticamente com seu
              próprio perfil.
            </p>
          </div>
          <div className="boxWrapperNotebookText">
            <img src="./check.png" alt="" />
            <p>
              Crie seus tokens não fungíveis de forma gratuita, rápida e
              simples.
            </p>
          </div>
          <div className="boxWrapperNotebookText">
            <img src="./check.png" alt="" />
            <p>
              Concentre seus colecionáveis criados no seu espaço pessoal de
              vendas customizável e compartilhável.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
