/**
 *
 * CampaignCost
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from '../CurrencyFormat';

function CampaignCost({ product }) {
  const { cost_price: costPrice } = product;

  return (
    <div>
      por apenas{' '}
      <span className="badge bg-dark">
        <CurrencyFormat value={costPrice} />
      </span>
    </div>
  );
}

CampaignCost.propTypes = {};

export default memo(CampaignCost);
