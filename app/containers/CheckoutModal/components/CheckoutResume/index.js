/**
 *
 * CheckoutResume
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CheckoutResume({ campaignName, quotesQuantity }) {
  return (
    <div className="alert alert-info p-2 mb-2 font-xs">
      <i className="bi bi-check-circle" /> Você está adquirindo
      <span className="font-weight-500">&nbsp;{quotesQuantity} cota</span>
      <span>&nbsp;da ação entre amigos</span>
      <span className="font-weight-500">&nbsp;{campaignName}</span>,
      <span>&nbsp;seu número será gerado</span>
      <span>&nbsp;assim que concluir a compra.</span>
    </div>
  );
}

CheckoutResume.propTypes = {
  campaignName: PropTypes.string.isRequired,
  quotesQuantity: PropTypes.number.isRequired,
};

export default memo(CheckoutResume);
