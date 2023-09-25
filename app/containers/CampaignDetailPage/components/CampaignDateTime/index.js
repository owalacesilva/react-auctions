/**
 *
 * CampaignDateTime
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DateTimeFormat from '../../../../components/DateTimeFormat';

function CampaignDateTime({ optInDate }) {
  return (
    <div>
      Sorteio{' '}
      <span className="badge bg-light text-dark">
        {/*<DateTimeFormat dateString={optInDate} />*/}
      </span>
    </div>
  );
}

CampaignDateTime.propTypes = {
  optInDate: PropTypes.any.isRequired,
};

export default memo(CampaignDateTime);
