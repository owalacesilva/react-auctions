/**
 *
 * CheckoutPage
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
import makeSelectCheckoutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import AuctionListItem from '../../components/AuctionListItem/Loadable';
import QRCode from 'react-qr-code';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, store } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import CheckoutOrderPaymentInfo from '../../components/CheckoutOrderPaymentInfo';
import CheckoutDetailProduct from '../../components/CheckoutDetailProduct';

export function CheckoutPage({
  match
}) {
  useInjectReducer({ key: 'checkoutPage', reducer });
  useInjectSaga({ key: 'checkoutPage', saga });

  const { orderId } = match.params;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrderById(orderId);
  }, [orderId]);

  const getOrderById = async (orderId) => {
    const docRef = doc(store, 'orders', orderId);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setOrder({
        ...snapshot.data(),
        id: orderId
      });
    } else {
      throw new Error('Order not found');
    }
  }

  return (
    <div>
      <Helmet>
        <title>CheckoutPage</title>
        <meta name="description" content="Description of CheckoutPage" />
      </Helmet>
      <div className="black-bar fuse"></div>
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div className="compra-status">
            <div className="app-alerta-msg mb-2">
              <i className="app-alerta-msg--icone bi bi-check-circle text-warning"></i>
              <div className="app-alerta-msg--txt">
                <h3 className="app-alerta-msg--titulo">Aguardando Pagamento!</h3>
                <p>Finalize o pagamento</p>
              </div>
            </div>
          </div>
          {order && <CheckoutOrderPaymentInfo order={order} />}
          {order && <CheckoutDetailProduct order={order} />}
        </div>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  checkoutPage: makeSelectCheckoutPage(),
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
)(CheckoutPage);
