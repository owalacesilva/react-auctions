/**
 *
 * CampaignWinners
 *
 */

import React, { memo } from 'react';
import ProfileImage from '../../images/profile.jpg';

function CampaignWinners() {
  return (
    <div className="app-ganhadores mb-2 ">
      <div className="col-12">
        <div className="app-title">
          <h1>🎉 Ganhadores</h1>
          <div className="app-title-desc">sortudos</div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <div className="ganhadorItem_ganhadorContainer__1Sbxm mb-2 pointer">
              <div className="ganhadorItem_ganhadorFoto__324kH box-shadow-08">
                <div className="winner-image">
                  <img src={ProfileImage} decoding="async" data-nimg="fill" />
                  <noscript></noscript>
                </div>
              </div>
              <div className="undefined w-100">
                <h3 className="ganhadorItem_ganhadorNome__2j_J-">João Pedro</h3>
                <div className="ganhadorItem_ganhadorDescricao__Z4kO2">
                  <p className="mb-0 ganhador-campanha"><b>EDIÇÃO 171 - 1 FIAT ARGO - VERMELHO</b></p>
                  <p className="mb-0 ganhador-numero-sorte">Número da sorte <b>839501</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Data da premiação <b>02/09/2023</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Sorteio <b>15414627791202320/171</b></p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="ganhadorItem_ganhadorContainer__1Sbxm mb-2 pointer">
              <div className="ganhadorItem_ganhadorFoto__324kH box-shadow-08">
                <div className="winner-image">
                  <img src={ProfileImage} decoding="async" data-nimg="fill" />
                </div>
              </div>
              <div className="undefined w-100">
                <h3 className="ganhadorItem_ganhadorNome__2j_J-">Michael Carvalho</h3>
                <div className="ganhadorItem_ganhadorDescricao__Z4kO2">
                  <p className="mb-0 ganhador-campanha"><b>EDIÇÃO 170 - 1 HONDA PCX 160 - BRANCA </b></p>
                  <p className="mb-0 ganhador-numero-sorte">Número da sorte <b>839501</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Data da premiação <b>02/09/2023</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Sorteio <b>15414631665202370/170</b></p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="ganhadorItem_ganhadorContainer__1Sbxm mb-2 pointer">
              <div className="ganhadorItem_ganhadorFoto__324kH box-shadow-08">
                <div className="winner-image">
                  <img src={ProfileImage} decoding="async" data-nimg="fill" />
                </div>
              </div>
              <div className="undefined w-100">
                <h3 className="ganhadorItem_ganhadorNome__2j_J-">Gisele silva</h3>
                <div className="ganhadorItem_ganhadorDescricao__Z4kO2">
                  <p className="mb-0 ganhador-campanha"><b>EDIÇÃO 169 - 1 HONDA CG 160 START - AZUL </b></p>
                  <p className="mb-0 ganhador-numero-sorte">Número da sorte <b>839501</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Data da premiação <b>02/09/2023</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Sorteio <b>15414627791202320/169</b></p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="ganhadorItem_ganhadorContainer__1Sbxm mb-2 pointer">
              <div className="ganhadorItem_ganhadorFoto__324kH box-shadow-08">
                <div className="winner-image">
                  <img src={ProfileImage} decoding="async" data-nimg="fill" />
                </div>
              </div>
              <div className="undefined w-100">
                <h3 className="ganhadorItem_ganhadorNome__2j_J-">Alex fonseca</h3>
                <div className="ganhadorItem_ganhadorDescricao__Z4kO2">
                  <p className="mb-0 ganhador-campanha"><b>EDIÇÃO 168 - 1 AUDI Q3 - BRANCO</b></p>
                  <p className="mb-0 ganhador-numero-sorte">Número da sorte <b>839501</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Data da premiação <b>02/09/2023</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Sorteio <b>15414627791202320/168</b></p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="ganhadorItem_ganhadorContainer__1Sbxm mb-2 pointer">
              <div className="ganhadorItem_ganhadorFoto__324kH box-shadow-08">
                <div className="winner-image">
                  <img src={ProfileImage} decoding="async" data-nimg="fill" />
                </div>
              </div>
              <div className="undefined w-100">
                <h3 className="ganhadorItem_ganhadorNome__2j_J-">Christopher Fontoura</h3>
                <div className="ganhadorItem_ganhadorDescricao__Z4kO2">
                  <p className="mb-0 ganhador-campanha"><b>EDIÇÃO 167 - 1 VW/ NIVUS TSI - AZUL  </b></p>
                  <p className="mb-0 ganhador-numero-sorte">Número da sorte <b>839501</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Data da premiação <b>02/09/2023</b></p>
                  <p className="mb-0 ganhador-codigo-operacao">Sorteio <b>15414627791202320/167</b></p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

CampaignWinners.propTypes = {};

export default memo(CampaignWinners);
