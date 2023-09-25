/**
 *
 * AuctionDetailPage
 *
 */

import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import makeSelectAuctionDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import CampaignFeatured from '../../components/CampaignFeatured/Loadable';
import CheckoutModal from '../CheckoutModal/Loadable';
import { store } from '../../firebase';
import { createStaticPix, hasError } from 'pix-utils';
import CampaignCost from './components/CampaignCost';
import CampaignDateTime from './components/CampaignDateTime';
import CampaignQuotesForm from './components/CampaignQuotesForm';

const fetchCampaign = async slug => {
  const docRef = doc(store, 'campanhas', slug);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error('Product not found');
  }

  return snapshot.data();
};

export function CampaignDetailPage({ match, history }) {
  useInjectReducer({ key: 'auctionDetailPage', reducer });
  useInjectSaga({ key: 'auctionDetailPage', saga });

  const { slug } = match.params;
  const [campaign, setCampaign] = useState(null);
  const [quotesQuantity, setQuotesQuantity] = useState(1);
  const [openCheckout, setOpenCheckout] = useState(false);

  const fetchCampaignWrapper = useCallback(async () => {
    const document = await fetchCampaign(slug); // apiCampaign.getOneCampaign();

    setCampaign(document);
  }, []);

  useEffect(() => {
    fetchCampaignWrapper();
  }, [slug]);

  const createOrder = async ({ providerData /* loggedUser */ }) => {
    const userData = providerData.shift();

    const pix = createStaticPix({
      merchantName: 'RC Systems',
      merchantCity: 'Rio de Janeiro',
      pixKey: 'nubank@gmail.com',
      infoAdicional: 'Gerado por Pix',
      transactionAmount: quotesQuantity * campaign.preco,
    });

    if (hasError(pix)) {
      throw new Error('Error pix');
    }

    const collectionRef = collection(store, 'pedidos');
    const docRef = await addDoc(collectionRef, {
      data_registro: new Date(), // TODO: use firebase api
      produto: campaign,
      cotas: quotesQuantity, // TODO: generate quotes
      status: 'active',
      // ...generateQuotes(product, quotesQuantity)
      total: quotesQuantity * campaign.preco,
      apostador: userData,
      // ...createPaymentInvoice(product)
      pagamento: {
        metodo: 'PIX',
        codigo: pix.toBRCode(),
      },
    });

    return docRef;
  };

  const handleFormSubmit = quantity => {
    setQuotesQuantity(quantity);
    setOpenCheckout(true);
  };

  const handleCreateOrder = loggedUser => {
    createOrder(loggedUser).then(newOrder => {
      history.push(`/orders/${newOrder.id}`);
    });
  };

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
            {campaign && (
              <CampaignFeatured
                campaign={{
                  titulo: campaign.titulo,
                  descricao: campaign.descricao,
                  imagens: campaign.imagens,
                }}
              />
            )}
          </div>
          <div className="row">
            <div className="col-12 text-center mb-3">
              {campaign && <CampaignCost costPrice={campaign.preco} />}
            </div>
            <div className="col-6 mb-3">
              {campaign && (
                <CampaignDateTime optInDate={campaign.data_sorteio} />
              )}
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
          {campaign && (
            <CampaignQuotesForm
              costPrice={campaign.preco}
              onFormSubmit={handleFormSubmit}
            />
          )}
        </div>
      </div>
      {openCheckout && (
        <CheckoutModal
          campaignName={campaign.titulo}
          quotesQuantity={quotesQuantity}
          onRequestCreateOrder={handleCreateOrder}
          onClose={() => setOpenCheckout(false)}
        />
      )}
    </div>
  );
}

CampaignDetailPage.propTypes = {
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
)(CampaignDetailPage);
