/**
 *
 * AuctionListPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuctionListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import AuctionListItem from '../../components/AuctionListItem/Loadable';
import AuctionFeatured from '../../components/AuctionFeatured/Loadable';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { collection, getDocs } from 'firebase/firestore';
import { store } from '../../firebase';
import CampaignFaq from '../../components/CampaignFaq';
import CampaignWinners from '../../components/CampaignWinners';

export function AuctionListPage() {
  useInjectReducer({ key: 'auctionListPage', reducer });
  useInjectSaga({ key: 'auctionListPage', saga });
  
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(store, 'products'));
    let preProducts = [];

    querySnapshot.forEach((doc) => {
      preProducts.push({ ...doc.data(), id: doc.id })
    });

    setProducts(preProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>AuctionListPage</title>
        <meta name="description" content="Description of AuctionListPage" />
      </Helmet>
      <div className="black-bar fuse"></div>
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div className="row mb-3">
            <div className="col-12">
              <div className="heading">
                <h1>⚡ Campanhas</h1>
                <p className="desc">Escolha sua sorte</p>
              </div>
            </div>
            {products.length > 0 && (
              <div className="col-12">
                <Link to={`sorteio/${products[0].id}`} className="text-decoration-none">
                  <AuctionFeatured product={products.shift()} />
                </Link>
              </div>
            )}
            {products.map((product, index) => (
              <div key={index} className="col-12">
                <Link to={`sorteio/${product.id}`} className="text-decoration-none">
                  <AuctionListItem product={product} />
                </Link>
              </div>
            ))}
          </div>
          <CampaignWinners />
          <CampaignFaq />
        </div>
      </div>
    </div>
  );
}

AuctionListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auctionListPage: makeSelectAuctionListPage(),
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
)(AuctionListPage);
