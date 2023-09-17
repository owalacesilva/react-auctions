/**
 *
 * CheckoutOrderPaymentInfo
 *
 */

import React, { memo } from 'react';
import QRCode from 'react-qr-code';
// import PropTypes from 'prop-types';

function CheckoutOrderPaymentInfo({
  order
}) {
  const { payment: orderPayment } = order;

  return (
    <div>
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
                    <input type="text" className="form-control" readOnly="" value={orderPayment['invoice_token']} />
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
                        value={orderPayment['invoice_token']}
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
    </div>
  );
}

CheckoutOrderPaymentInfo.propTypes = {};

export default memo(CheckoutOrderPaymentInfo);
