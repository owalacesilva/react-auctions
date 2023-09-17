/**
 *
 * CheckoutResume
 *
 */

import React, { memo } from 'react';

function CheckoutResume({
  product,
  quotesQuantity
}) {
  return (
    <div className="alert alert-info p-2 mb-2 font-xs">
      <i className="bi bi-check-circle"></i> Você está adquirindo<span className="font-weight-500">&nbsp;{quotesQuantity} cota</span><span>&nbsp;da ação entre amigos</span><span className="font-weight-500">&nbsp;{product.title}</span>,<span>&nbsp;seu número será gerado</span><span>&nbsp;assim que concluir a compra.</span>
    </div>
  );
}

CheckoutResume.propTypes = {};

export default memo(CheckoutResume);
