/**
 *
 * AuctionFeatured
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import ProductImage from './../../images/product-image.jpg';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AuctionFeatured() {
  return (
    <div>
      <div className="card mb-2">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-feature-image">
                <img src={ProductImage} className="card-img-top" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-feature-image">
                <img src={ProductImage} className="card-img-top" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-feature-image">
                <img src={ProductImage} className="card-img-top" />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="card-body p-2">
          <h5 className="card-title">
            Product title
          </h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <span className="badge bg-dark font-xsss">Corre que está acabando!</span>
        </div>
      </div>
    </div>
  );
}

AuctionFeatured.propTypes = {};

export default memo(AuctionFeatured);