/**
 *
 * CheckoutPage
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
import { doc, getDoc } from 'firebase/firestore';
import makeSelectCheckoutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { store } from '../../firebase';
import CheckoutOrderPaymentInfo from './components/CheckoutOrderPaymentInfo';
import CheckoutDetailProduct from './components/CheckoutDetailProduct';

export function CheckoutPage({ match }) {
  useInjectReducer({ key: 'checkoutPage', reducer });
  useInjectSaga({ key: 'checkoutPage', saga });

  const { orderId } = match.params;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrderById();
  }, [getOrderById]);

  const getOrderById = useCallback(async () => {
    const docRef = doc(store, 'pedidos', orderId);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setOrder({
        ...snapshot.data(),
        id: orderId,
      });
    } else {
      throw new Error('Order not found');
    }
  }, [orderId]);

  return (
    <div>
      <Helmet>
        <title>CheckoutPage</title>
        <meta name="description" content="Description of CheckoutPage" />
      </Helmet>
      <div className="black-bar fuse" />
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <div className="compra-status">
            <div className="app-alerta-msg mb-2">
              <i className="app-alerta-msg--icone bi bi-check-circle text-warning" />
              <div className="app-alerta-msg--txt">
                <h3 className="app-alerta-msg--titulo">
                  Aguardando Pagamento!
                </h3>
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
  match: PropTypes.any.isRequired,
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
