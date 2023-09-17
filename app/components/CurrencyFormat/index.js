/**
 *
 * CurrencyFormat
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CurrencyFormat({ value }) {
  const formatCurrency = number =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(number);

  return <span>{formatCurrency(value)}</span>;
}

CurrencyFormat.propTypes = {};

export default memo(CurrencyFormat);
