/**
 *
 * CampaignImage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CampaignImage({ imagens, additionalClasses }) {
  const getUrlImage = () => {
    if (!imagens) return null;

    const image = imagens.shift();

    return image.url_imagem;
  };

  return <img src={getUrlImage()} className={additionalClasses} />;
}

CampaignImage.propTypes = {
  imagens: PropTypes.arrayOf({
    descricao: PropTypes.string.isRequired,
    url_imagem: PropTypes.string.isRequired,
  }),
  additionalClasses: PropTypes.string,
};

export default memo(CampaignImage);
