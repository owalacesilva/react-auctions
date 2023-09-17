/**
 *
 * AuctionDetailPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
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
import AuctionFeatured from '../../components/AuctionFeatured/Loadable';
import CheckoutModal from '../CheckoutModal/Loadable';
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { store } from '../../firebase';
import { createStaticPix, hasError } from 'pix-utils';
import CampaignQuotesForm from '../../components/CampaignQuotesForm';
import CampaignCost from '../../components/CampaignCost';
import CampaignDateTime from '../../components/CampaignDateTime';

export function AuctionDetailPage({
  match,
  history
}) {
  useInjectReducer({ key: 'auctionDetailPage', reducer });
  useInjectSaga({ key: 'auctionDetailPage', saga });
  
  const { slug: productSlug } = match.params;
  const [product, setProduct] = useState(null);
  const [quotesQuantity, setQuotesQuantity] = useState(1);
  const [openCheckout, setOpenCheckout] = useState(false);

  const getProduct = async (slug) => {
    const docRef = doc(store, 'products', slug);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setProduct(snapshot.data());
    } else {
      throw new Error('Product not found');
    }
  }

  const createOrder = async ({ providerData /* loggedUser */}) => {
    const userData = providerData.shift();

    const pix = createStaticPix({
      merchantName: 'RC Systems',
      merchantCity: 'Rio de Janeiro',
      pixKey: 'nubank@gmail.com',
      infoAdicional: 'Gerado por Pix',
      transactionAmount: quotesQuantity * product.cost_price,
    });
    
    if (hasError(pix)) {
      throw new Error('Error pix');
    }

    const collectionRef = collection(store, 'orders');
    const docRef = await addDoc(collectionRef, {
      created_at: new Date(), // TODO: use firebase api
      user_buyer: userData,
      product: product,
      status: 'active',
      // ...createPaymentInvoice(product)
      payment: {
        method: 'PIX',
        invoice_token: pix.toBRCode(),
      },
      // ...generateQuotes(product, quotesQuantity)
      quotes: quotesQuantity, // TODO: generate quotes
      total: quotesQuantity * product.cost_price
    });

    return docRef;
  }

  const handleFormSubmit = (quantity) => {
    setQuotesQuantity(quantity);
    setOpenCheckout(true);
  }

  const handleCreateOrder = (loggedUser) => {
    createOrder(loggedUser).then((newOrder) => {
      history.push(`/order/${newOrder.id}`);
    });
  }

  useEffect(() => {
    getProduct(productSlug);
  }, [productSlug]);

  return (
    <div>
      <Helmet>
        <title>AuctionDetailPage</title>
        <meta name="description" content="Description of AuctionDetailPage" />
      </Helmet>
      <div className="black-bar fuse" />
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div>
            {product && <AuctionFeatured product={product} /> }
          </div>
          <div className="row">
            <div className="col-12 text-center mb-3">
              { product && <CampaignCost product={product} /> }
            </div>
            <div className="col-6 mb-3">
              { product && <CampaignDateTime product={product} /> }
            </div>
            <div className="col-6" />
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
          {
            product && (
              <CampaignQuotesForm
                costPrice={product.cost_price}
                onFormSubmit={handleFormSubmit} />
            )
          }
        </div>
      </div>
      {
        openCheckout && (
          <CheckoutModal
            data={{
              product,
              quotesQuantity
            }}
            onRequestCreateOrder={handleCreateOrder}
            onClose={() => setOpenCheckout(false)} />
        )
      }
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
