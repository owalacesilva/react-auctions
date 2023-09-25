/**
 *
 * CampaignImage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CampaignImage({ imagens, additionalClasses }) {
  const getUrlImage = () => {
    if (!Array.isArray(imagens)) return null;

    const image = imagens.shift();

    return image ? image.url_imagem : null;
  };

  return <img src={getUrlImage()} className={additionalClasses} />;
}

CampaignImage.propTypes = {
  imagens: PropTypes.any.isRequired,
  additionalClasses: PropTypes.string,
};

export default memo(CampaignImage);
