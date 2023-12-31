/**
 *
 * CheckoutDetailProduct
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from '../../../../components/CurrencyFormat';
import DateTimeFormat from '../../../../components/DateTimeFormat';

function CheckoutDetailProduct({
  order: {
    id: orderId,
    apostador: userBuyer,
    data_registro: orderCreatedAt,
    status: orderStatus,
    cotas: orderQuotes,
    total: orderTotal,
  },
}) {
  return (
    <div>
      <div className="detalhes app-card card mb-2">
        <div className="card-body font-xs">
          <div className="font-xs opacity-75 mb-2">
            <i className="bi bi-info-circle" /> Detalhes da sua compra&nbsp;
            <div className="pt-1 opacity-50">{orderId}</div>
          </div>
          <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
            <div className="title font-weight-500 me-1">Comprador:</div>
            <div className="result font-xs">{userBuyer.displayName}</div>
          </div>
          <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
            <div className="title font-weight-500 me-1">CPF:</div>
            <div className="result font-xs">{userBuyer.photoURL}</div>
          </div>
          <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
            <div className="title font-weight-500 me-1">Telefone:</div>
            <div className="result font-xs">{userBuyer.phoneNumber}</div>
          </div>
          <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
            <div className="title font-weight-500 me-1">Data/horário:</div>
            <div className="result font-xs">
              <DateTimeFormat dateString={orderCreatedAt} />
            </div>
          </div>
          <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
            <div className="title font-weight-500 me-1">Situação:</div>
            <div className="result font-xs">{orderStatus}</div>
          </div>
          <div className="item d-flex align-items-baseline mb-1 pb-1 border-bottom-rgba border-1">
            <div className="title font-weight-500 me-1">Total:</div>
            <div className="result font-xs">
              <CurrencyFormat value={orderTotal} />
            </div>
          </div>
          <div className="item d-flex align-items-baseline">
            <div className="title font-weight-500 me-1">Cotas:</div>
            <div className="result font-xs" data-nosnippet="true">
              {orderStatus === 'paid' ? (
                <span>{orderQuotes}</span>
              ) : (
                <span>As cotas são liberadas após o pagamento</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutDetailProduct.propTypes = {
  order: PropTypes.any.isRequired,
};

export default memo(CheckoutDetailProduct);
