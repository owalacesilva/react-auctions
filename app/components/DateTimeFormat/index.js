/**
 *
 * DateTimeFormat
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function DateTimeFormat({ dateString }) {
  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString('pt-BR', options);
  };

  return <span>{formatDate(dateString)}</span>;
}

DateTimeFormat.propTypes = {};

export default memo(DateTimeFormat);
