/**
 *
 * CampaignCost
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from '../../../../components/CurrencyFormat';

function CampaignCost({ costPrice }) {
  return (
    <div>
      por apenas{' '}
      <span className="badge bg-dark">
        <CurrencyFormat value={costPrice} />
      </span>
    </div>
  );
}

CampaignCost.propTypes = {
  costPrice: PropTypes.number.isRequired,
};

export default memo(CampaignCost);
