/**
 *
 * CampaignFeatured
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CampaignImage from '../CampaignImage/Loadable';

function CampaignFeatured({ campaign }) {
  return (
    <div>
      <div className="card mb-2">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-feature-image">
                <CampaignImage
                  imagens={campaign.imagens}
                  additionalClasses="card-img-top"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-feature-image">
                <CampaignImage
                  imagens={campaign.imagens}
                  additionalClasses="card-img-top"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-feature-image">
                <CampaignImage
                  imagens={campaign.imagens}
                  additionalClasses="card-img-top"
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="card-body p-2">
          <h5 className="card-title">{campaign.titulo}</h5>
          <p className="card-text">{campaign.descricao}</p>
          <span className="badge bg-dark font-xsss">
            Corre que está acabando!
          </span>
        </div>
      </div>
    </div>
  );
}

CampaignFeatured.propTypes = {
  campaign: {
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    imagens: PropTypes.arrayOf({
      descricao: PropTypes.string.isRequired,
      url_imagem: PropTypes.string.isRequired,
    }),
  },
};

export default memo(CampaignFeatured);
