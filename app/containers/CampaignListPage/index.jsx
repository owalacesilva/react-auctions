/**
 *
 * CampaignListPage
 *
 */

import React, { memo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { collection, getDocs } from 'firebase/firestore';
import makeSelectCampaignListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { store } from '../../firebase';
import CampaignItem from '../../components/CampaignItem/Loadable';
import CampaignFeatured from '../../components/CampaignFeatured/Loadable';
import CampaignFaq from '../../components/CampaignFaq';
import CampaignWinners from '../../components/CampaignWinners';

const fetchCampaignList = async () => {
  const querySnapshot = await getDocs(collection(store, 'campanhas'));
  const preCampaigns = [];

  querySnapshot.forEach(doc => {
    return preCampaigns.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return preCampaigns;
};

export function CampaignListPage() {
  useInjectReducer({ key: 'CampaignListPage', reducer });
  useInjectSaga({ key: 'CampaignListPage', saga });

  const [featuredCampaign, setFeaturedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaignsWrapper = useCallback(async () => {
    const campaignList = await fetchCampaignList(); // apiCampaign.getCampaignList();

    if (campaignList.length > 0) {
      setFeaturedCampaign(campaignList.shift());
    }

    setCampaigns(campaignList);
  }, []);

  useEffect(() => {
    fetchCampaignsWrapper();
  }, [fetchCampaignsWrapper]);

  const renderCampaignList = () => {
    if (!campaigns) return null;

    return campaigns.map(
      campaign =>
        campaign && (
          <div key={campaign.id} className="col-12">
            <Link
              to={`sorteio/${campaign.id}`}
              className="text-decoration-none"
            >
              <CampaignItem product={campaign} />
            </Link>
          </div>
        ),
    );
  };

  return (
    <div>
      <Helmet>
        <title>CampaignListPage</title>
        <meta name="description" content="Description of CampaignListPage" />
      </Helmet>
      <div className="black-bar fuse" />
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div className="row mb-3">
            <div className="col-12">
              <div className="heading">
                <h1>⚡ Campanhas</h1>
                <p className="desc">Escolha sua sorte</p>
              </div>
            </div>
            {featuredCampaign && (
              <div className="col-12">
                <Link
                  to={`sorteio/${featuredCampaign.id}`}
                  className="text-decoration-none"
                >
                  <CampaignFeatured
                    campaign={{
                      titulo: featuredCampaign.titulo,
                      descricao: featuredCampaign.descricao,
                      imagens: featuredCampaign.imagens,
                    }}
                  />
                </Link>
              </div>
            )}
            {renderCampaignList()}
          </div>
          <CampaignWinners />
          <CampaignFaq />
        </div>
      </div>
    </div>
  );
}

CampaignListPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  CampaignListPage: makeSelectCampaignListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CampaignListPage);
