/**
 *
 * AuctionListItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CampaignImage from '../CampaignImage/Loadable';

function CampaignItem({ campaign }) {
  return (
    <div className="card-product">
      <div className="card mb-2">
        <div className="row align-items-start g-0">
          <div className="col-md-3 col-4 px-2 py-2">
            <CampaignImage
              images={campaign.imagens}
              additionalClasses="img-fluid rounded"
            />
          </div>
          <div className="col-md-9 col-8">
            <div className="card-body p-2">
              <h5 className="card-title">{campaign.titulo}</h5>
              <p className="card-text m-1">{campaign.descricao}</p>
              <span className="badge bg-success font-xsss">Adquira já!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CampaignItem.propTypes = {
  campaign: {
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    imagens: PropTypes.arrayOf({
      descricao: PropTypes.string.isRequired,
      url_imagem: PropTypes.string.isRequired,
    }),
  },
};

export default memo(CampaignItem);
