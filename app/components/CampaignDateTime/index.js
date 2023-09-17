/**
 *
 * CampaignDateTime
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DateTimeFormat from '../DateTimeFormat';

function CampaignDateTime({ product }) {
  const { opt_in_date: optInDate } = product;

  return (
    <div>
      Sorteio{' '}
      <span className="badge bg-light text-dark">
        <DateTimeFormat dateString={optInDate.toDate().toISOString()} />
      </span>
    </div>
  );
}

CampaignDateTime.propTypes = {};

export default memo(CampaignDateTime);
