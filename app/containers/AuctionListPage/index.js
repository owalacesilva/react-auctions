/**
 *
 * AuctionListPage
 *
 */

import React, { memo } from 'react';
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

export function AuctionListPage() {
  useInjectReducer({ key: 'auctionListPage', reducer });
  useInjectSaga({ key: 'auctionListPage', saga });

  return (
    <div>
      <Helmet>
        <title>AuctionListPage</title>
        <meta name="description" content="Description of AuctionListPage" />
      </Helmet>
      <div className="black-bar fuse"></div>
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h1>⚡ Prêmios</h1>
                <p className="desc">Escolha sua sorte</p>
              </div>
            </div>
            <div className="col-12">
              <Link to="sorteio/carro" className="text-decoration-none">
                <AuctionFeatured />
              </Link>
            </div>
            <div className="col-12">
              <Link to="sorteio/carro" className="text-decoration-none">
                <AuctionListItem />
              </Link>
            </div>
          </div>
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
