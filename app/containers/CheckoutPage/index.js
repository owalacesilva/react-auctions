/**
 *
 * CheckoutPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCheckoutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import AuctionListItem from '../../components/AuctionListItem/Loadable';
import QRCode from 'react-qr-code';

export function CheckoutPage() {
  useInjectReducer({ key: 'checkoutPage', reducer });
  useInjectSaga({ key: 'checkoutPage', saga });

  return (
    <div>
      <Helmet>
        <title>CheckoutPage</title>
        <meta name="description" content="Description of CheckoutPage" />
      </Helmet>
      <div className="black-bar fuse"></div>
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div className="compra-status">
            <div className="app-alerta-msg mb-2">
              <i className="app-alerta-msg--icone bi bi-check-circle text-warning"></i>
              <div className="app-alerta-msg--txt">
                <h3 className="app-alerta-msg--titulo">Aguardando Pagamento!</h3>
                <p>Finalize o pagamento</p>
              </div>
            </div>
          </div>
          <div className="compra-pagamento">
            <div className="pagamentoQrCode text-center">
              <div className="pagamento-rapido">
                <div className="app-card card rounded-top rounded-0 shadow-none border-bottom">
                  <div className="card-body">
                    <div className="pagamento-rapido--progress">
                      <div className="d-flex justify-content-center align-items-center mb-1 font-md">
                        <div><small>Você tem</small></div>
                        <div className="mx-1">
                          <b className="font-md">20:00</b>
                        </div>
                        <div><small>para pagar</small></div>
                      </div>
                      <div className="progress bg-dark bg-opacity-50">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-card card rounded-bottom rounded-0 rounded-bottom b-1 mb-2">
                <div className="card-body">
                  <div className="row justify-content-center mb-2">
                    <div className="col-12 text-start">
                      <div className="mb-1">
                        <span className="badge bg-success badge-xs">1</span>
                        <span className="font-xs"> Copie o código PIX abaixo.</span>
                      </div>
                      <div className="input-group mb-2">
                        <input type="text" className="form-control" readonly="" value="00020126570014br.gov.bcb.pix0111811177100250220testede envio de pix52040000530398654041.235802BR5914testechave cpf6008saopaulo62070503***6304E067" />
                        <div className="input-group-append">
                          <button className="app-btn btn btn-success rounded-0 rounded-end">Copiar</button>
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className="badge bg-success">2</span>
                        <span className="font-xs">Abra o app do seu banco e escolha a opção PIX, como se fosse fazer uma transferência.</span>
                      </div>
                      <p>
                        <span className="badge bg-success">3</span>
                        <span className="font-xs">Selecione a opção PIX cópia e cola, cole a chave copiada e confirme o pagamento.</span>
                      </p>
                    </div>
                    <div className="col-12 my-2">
                      <p className="alert alert-warning p-2 font-xss" style={{ "textAlign": "justify" }}>Este pagamento só pode ser realizado dentro do tempo, após este período, caso o pagamento não for confirmado os números voltam a ficar disponíveis.</p>
                    </div>
                    <div className="col-12">
                      <button className="app-btn btn btn-success btn-sm">
                        <i className="bi bi-check-all"></i> Já fiz o pagamento
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <div className="d-block text-center">
                        <div id="img-qrcode" className="d-inline-block bg-white rounded">
                          <img src="" className="img-fluid" />
                          <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={`00020126570014br.gov.bcb.pix0111811177100250220testede envio de pix52040000530398654041.235802BR5914testechave cpf6008saopaulo62070503***6304E067`}
                            viewBox={`0 0 256 256`} />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 pb-3">
                      <div className="font-xss">
                        <h5>
                          <i className="bi bi-qr-code"></i> QR Code
                        </h5>
                        <div>Acesse o APP do seu banco e escolha a opção pagar com QR Code, escaneie o código ao lado e confirme o pagamento.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="alert alert-info p-2 font-xss mb-2">
                <i className="bi bi-info-circle"></i> Após o pagamento aguarde até 5 minutos para a confirmação, caso já tenha efetuado o pagamento, clique no botão <b>Já fiz o pagamento</b>.
              </div>
            </div>
          </div>    
          <AuctionListItem />
          <div className="detalhes app-card card mb-2">
            <div className="card-body font-xs">
              <div className="font-xs opacity-75 mb-2">
                <i className="bi bi-info-circle"></i> Detalhes da sua compra&nbsp;
                <div className="pt-1 opacity-50">221fd4f23e4664cd518d4b0feda457c6</div>
              </div>
              <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
                <div className="title font-weight-500 me-1">Comprador:</div>
                <div className="result font-xs">Paulo Oliveira</div>
              </div>
              <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
                <div className="title font-weight-500 me-1">CPF:</div>
                <div className="result font-xs">118.***.***-**</div>
              </div>
              <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
                <div className="title font-weight-500 me-1">Telefone:</div>
                <div className="result font-xs">(11) *****-****</div>
              </div>
              <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
                <div className="title font-weight-500 me-1">Data/horário:</div>
                <div className="result font-xs">29/08/2023 às 17h52</div>
              </div>
              <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
                <div className="title font-weight-500 me-1">Situação:</div>
                <div className="result font-xs">Aguardando Pagamento</div>
              </div>
              <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
                <div className="title font-weight-500 me-1">Total:</div>
                <div className="result font-xs">R$ 9,98</div>
              </div>
              <div className="item d-flex align-items-baseline">
                <div className="title font-weight-500 me-1">Cotas:</div>
                <div className="result font-xs" data-nosnippet="true">As cotas são liberadas após o pagamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  checkoutPage: makeSelectCheckoutPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CheckoutPage);
