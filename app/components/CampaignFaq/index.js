/**
 *
 * CampaignFaq
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CampaignFaq() {
  return (
    <div className="app-perguntas">
      <div className="app-title">
        <h1>🤷 Perguntas frequentes</h1>
      </div>
      <div id="perguntas-box">
        <div className="mb-2">
          <div className="pergunta-item d-flex flex-column p-2 bg-white box-shadow-08 rounded-10 font-weight-500 font-xs">
            <div className="pergunta-item--pergunta collapsed" data-bs-toggle="collapse" data-bs-target="#pergunta-64a708588eb38116720230706" aria-expanded="false" aria-controls="pergunta-64a708588eb38116720230706"><i className="bi bi-arrow-right me-2 text-cor-primaria"></i> <span>Acessando suas compras</span></div>
            <div className="d-block">
              <div className="pergunta-item--resp mt-1 text-muted collapse" id="pergunta-64a708588eb38116720230706" data-bs-parent="#perguntas-box">
                <p>Existem duas formas de você conseguir acessar suas compras, a primeira é logando no site, abrindo o menu do site e clicando em "Entrar" e a segunda forma é visitando a campanha e clicando em "Compras" logo a baixo do nome "Chances"</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div className="pergunta-item d-flex flex-column p-2 bg-white box-shadow-08 rounded-10 font-weight-500 font-xs">
            <div className="pergunta-item--pergunta collapsed" data-bs-toggle="collapse" data-bs-target="#pergunta-64a707b08baee639420230706" aria-expanded="false" aria-controls="pergunta-64a707b08baee639420230706"><i className="bi bi-arrow-right me-2 text-cor-primaria"></i> <span>Como é o processo do sorteio?</span></div>
            <div className="d-block">
              <div className="pergunta-item--resp mt-1 text-muted collapse" id="pergunta-64a707b08baee639420230706" data-bs-parent="#perguntas-box">
                <p>O sorteio será realizado com base na extração da Loteria Federal, conforme Condições de Participação constantes no título.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div className="pergunta-item d-flex flex-column p-2 bg-white box-shadow-08 rounded-10 font-weight-500 font-xs">
            <div className="pergunta-item--pergunta collapsed" data-bs-toggle="collapse" data-bs-target="#pergunta-64a7084065376714720230706" aria-expanded="false" aria-controls="pergunta-64a7084065376714720230706"><i className="bi bi-arrow-right me-2 text-cor-primaria"></i> <span>Onde o prêmio será entregue?</span></div>
            <div className="d-block">
              <div className="pergunta-item--resp collapse mt-1 text-muted" id="pergunta-64a7084065376714720230706" data-bs-parent="#perguntas-box">
                <p>Não há necessidade de se preocupar com os trâmites relacionados à entrega do prêmio, pois nós cuidaremos de tudo.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div className="pergunta-item d-flex flex-column p-2 bg-white box-shadow-08 rounded-10 font-weight-500 font-xs">
            <div className="pergunta-item--pergunta collapsed" data-bs-toggle="collapse" data-bs-target="#pergunta-64a708b76bb27320720230706" aria-expanded="false" aria-controls="pergunta-64a708b76bb27320720230706"><i className="bi bi-arrow-right me-2 text-cor-primaria"></i> <span>Qual a Entidade Beneficiada pelo título DIOGO 305?</span></div>
            <div className="d-block">
              <div className="pergunta-item--resp collapse mt-1 text-muted" id="pergunta-64a708b76bb27320720230706" data-bs-parent="#perguntas-box">
                <p>A FENAPESTALOZZI, que é uma instituição nacional de assistência social de direito privado e sem fins lucrativos. Atua na defesa e garantia de direit­os das pessoas com deficiência, transtornos globais do desenvolvimento e altas habili­dades, assim como suas famílias, atuando nas áreas de assistência social, educação, saúde, trabalho, cultura, esporte, lazer e entre outras. Conheça mais sobre a&nbsp;FENAPESTALOZZI em&nbsp;<a href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffenapestalozzi.org.br%2F&amp;data=05%7C01%7Craphael.moreira%40capemisa.com.br%7C36f7c51418ea41c967d108db565104a3%7C735acf2f25164f53b406acc747b4810c%7C0%7C0%7C638198678226164465%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&amp;sdata=VroX5%2Fx6G%2FCjEsEU9cBvd81BO7%2BC9kSBQpv4TUQyLCU%3D&amp;reserved=0" id="m_-5449138440950580083LPlnk451516" target="_blank">https://fenapestalozzi.org.br/</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CampaignFaq.propTypes = {};

export default memo(CampaignFaq);
