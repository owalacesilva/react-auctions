/**
 *
 * AuctionListItem
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import ProductImage from './../../images/product-image.jpg';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AuctionListItem() {
  return (
    <div className="card-product">
      <div class="card mb-2">
        <div class="row align-items-start g-0">
          <div class="col-md-3 col-4 px-2 py-2">
            <img src={ProductImage} className="img-fluid rounded" />
          </div>
          <div class="col-md-9 col-8">
            <div class="card-body p-2">
              <h5 class="card-title">
                Product title
              </h5>
              <p class="card-text m-1">
                This is a wider card
              </p>
              <span class="badge bg-success font-xsss">Adquira já!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AuctionListItem.propTypes = {};

export default memo(AuctionListItem);
