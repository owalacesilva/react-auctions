/**
 *
 * AuctionListItem
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AuctionListItem({ product }) {
  return (
    <div className="card-product">
      <div className="card mb-2">
        <div className="row align-items-start g-0">
          <div className="col-md-3 col-4 px-2 py-2">
            <img src={product.images['url']} className="img-fluid rounded" />
          </div>
          <div className="col-md-9 col-8">
            <div className="card-body p-2">
              <h5 className="card-title">
                {product.title}
              </h5>
              <p className="card-text m-1">
                {product.description}
              </p>
              <span className="badge bg-success font-xsss">Adquira já!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AuctionListItem.propTypes = {};

export default memo(AuctionListItem);
