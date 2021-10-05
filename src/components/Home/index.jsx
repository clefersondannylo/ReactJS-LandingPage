import React from 'react';
import './styles.css';

export function Home() {
  return (
    <main>
      <div className="WrapperHome">
        <section className="leftWrapper">
          <h1>GoTokens</h1>
          <img src="./nome.png" alt="" />
          <p>
            Acreditamos que em uma nova <br /> economia a conexão entre fãs e{' '}
            <br />
            celebridades podem ser diretas.{' '}
          </p>
          <a href="#">
            <h1>Começar</h1>
          </a>
          <p className="coloredTitle">ROLE ABAIXO PARA SABER MAIS</p>
        </section>
        <section className="centerWrapper">
          <img src="./logo.png" alt="design inovador" />
        </section>
        <section className="rightWrapper">
          <button className="buttonHelp">
            <div>
              <img src="./message.png" alt="íconde de mensagem" />
            </div>
          </button>
        </section>
      </div>
    </main>
  );
}
