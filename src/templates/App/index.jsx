import React from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { BoxWrapper } from '../../components/BoxWrapper';
import { Message } from '../../components/Message';
export function App() {
  return (
    <div style={{ backgroundImage: `url(./background.svg)` }} className="App">
      <Header />
      <Home />
      <Message />
      <BoxWrapper />
      {/* <div className="Wrapper">
        <div className="contentWrapper">
          <div className="boxWrapper">
            <div>
              <img
                style={{ width: '55px', height: '56px' }}
                src="./produto.png"
                alt=""
              />
            </div>
            <div>
              <h1>Produtor de conteúdo</h1>
              <p>
                Vídeos exclusivos para seus fãs
                <br /> e engajamento rentável
              </p>
            </div>
          </div>
          <div className="boxWrapper">
            <div>
              <img
                style={{ width: '68px', height: '64px' }}
                src="./games.png"
                alt=""
              />
            </div>
            <div>
              <h1>Games</h1>
              <p>
                Skins únicas, captação de recursos
                <br /> e participação no desenvolvimento.
              </p>
            </div>
          </div>
          <div className="boxWrapper">
            <div>
              <img
                style={{ width: '64px', height: '64px' }}
                src="./influenciadores.png"
                alt=""
              />
            </div>
            <div>
              <h1>Influenciadores</h1>
              <p>
                Lance seu conteúdo exclusivo como <br />
                tokens únicos para seus fãs
              </p>
            </div>
          </div>
        </div>
        <div className="contentWrapper">
          <div className="boxWrapper">
            <div>
              <img
                style={{ width: '57px', height: '56.7px' }}
                src="./esporte.png"
                alt=""
              />
            </div>
            <div>
              <h1>Esportes</h1>
              <p>
                Crie figurinhas de momentos <br />
                especiais e venda aos seus fãs
              </p>
            </div>
          </div>
          <div className="boxWrapper">
            <div>
              <img
                style={{ width: '61px', height: '67px' }}
                src="./artes.png"
                alt=""
              />
            </div>
            <div>
              <h1>Artes Digitais</h1>
              <p>
                Crie seu espaço para criação das
                <br /> suas artes e alcance público de
                <br />
                todos lugares do mundo
              </p>
            </div>
          </div>
          <div className="boxWrapper">
            <div>
              <img
                style={{ width: '52px', height: '52px' }}
                src="./musicas.png"
                alt=""
              />
            </div>
            <div>
              <h1>Músicas</h1>
              <p>
                Músicas e sons exclusivos e<br /> ponte direta para seus fãs
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
