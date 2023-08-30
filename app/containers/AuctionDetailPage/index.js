/**
 *
 * AuctionDetailPage
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
import makeSelectAuctionDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import AuctionFeatured from '../../components/AuctionFeatured/Loadable';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CheckoutModal from '../CheckoutModal/Loadable';

export function AuctionDetailPage() {
  useInjectReducer({ key: 'auctionDetailPage', reducer });
  useInjectSaga({ key: 'auctionDetailPage', saga });

  return (
    <div>
      <Helmet>
        <title>AuctionDetailPage</title>
        <meta name="description" content="Description of AuctionDetailPage" />
      </Helmet>
      <div className="black-bar fuse"></div>
        <div className="container container-common px-0">
          <div className="main-content py-3">
            <div>
              <AuctionFeatured />
            </div>
            <div className="row">
              <div className="col-12 text-center mb-3">
                por apenas <span className="badge bg-dark">R$ 25,00</span>
              </div>
              <div className="col-6 mb-3">
                Sorteio <span className="badge bg-light text-dark">21/08/2023 às 18h00</span>
              </div>
              <div className="col-6"></div>
              <div className="col-12">
                <div className="heading">
                  <h1>⚡ Cotas</h1>
                  <p className="desc">Escolha sua sorte</p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-success btn-sm">
                <span>Ver meus números</span>
              </button>
            </div>
            <Form action="/checkout" method="get">
              <Form.Group className="mb-3" controlId="quantity">
                <div className="card my-2">
                  <div className="card-body">
                    <div className="text-center mb-3 pt-2">
                      <Form.Label className="text-muted font-xs">Selecione a quantidade de números</Form.Label>
                    </div>
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <div className="sale-item">
                        <div className="item p-2 me-2 mb-2 flex-column">
                          <h3 className="mb-1">
                            <small className="text-dark">+</small>05
                          </h3>
                          <p className="text-muted font-xss text-uppercase m-0">Selecionar</p>
                        </div>
                        <div className="item p-2 me-2 mb-2 flex-column popular">
                          <h3 className="mb-1">
                            <small className="text-dark">+</small>10
                          </h3>
                          <p className="text-muted font-xss text-uppercase">Selecionar</p>
                        </div>
                        <div className="item p-2 me-2 mb-2 flex-column">
                          <h3 className="mb-1">
                            <small className="text-dark">+</small>50
                          </h3>
                          <p className="text-muted font-xss text-uppercase">Selecionar</p>
                        </div>
                        <div className="item p-2 me-2 mb-2 flex-column">
                          <h3 className="mb-1">
                            <small className="text-dark">+</small>100
                          </h3>
                          <p className="text-muted font-xss text-uppercase">Selecionar</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="vendasExpressNums d-flex align-items-center">
                          <div className="left pointer">
                            <div className="addNumero numeroChange text-muted">
                              <FontAwesomeIcon icon={faMinus} size="xs" />
                            </div>
                          </div>
                          <div className="center">
                            <Form.Control type="text" aria-label="Quantidade de números" readOnly={true} placeholder="1" />
                          </div>
                          <div className="right pointer">
                            <div className="removeNumero numeroChange text-muted">
                              <FontAwesomeIcon icon={faPlus} size="xs" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="submit">
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success">
                    <div className="row align-items-center">
                      <div className="col pe-0 text-nowrap">
                        <span>Participar do sorteio</span>
                      </div>
                      <div className="col-auto ps-0">
                        <span>R$ 100,00</span>
                      </div>
                    </div>
                  </button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      <CheckoutModal />
    </div>
  );
}

AuctionDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auctionDetailPage: makeSelectAuctionDetailPage(),
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
)(AuctionDetailPage);
