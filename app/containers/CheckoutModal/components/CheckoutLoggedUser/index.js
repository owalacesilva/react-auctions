/**
 *
 * CheckoutLoggedUser
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../../../../images/profile.jpg';

function CheckoutLoggedUser({ loggedUser }) {
  return (
    <div className="card-product">
      <div className="card mb-2">
        <div className="row align-items-start g-0">
          <div className="col-md-3 col-4 px-2 py-2">
            <img
              alt="Profile user"
              src={ProfileImage}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 col-8">
            <div className="card-body p-2">
              <h5 className="card-title">{loggedUser.email}</h5>
              <p className="card-text m-1">{loggedUser.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutLoggedUser.propTypes = {
  loggedUser: PropTypes.any.isRequired,
};

export default memo(CheckoutLoggedUser);
