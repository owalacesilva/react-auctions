/**
 *
 * CheckoutModal
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
import makeSelectCheckoutModal from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Modal } from 'react-bootstrap';
import CheckoutResume from '../../components/CheckoutResume';
import CheckoutLogin from '../../components/CheckoutLogin';
import CheckoutSignUp from '../../components/CheckoutSignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

export function CheckoutModal({
  data,
  onRequestCreateOrder
}) {
  useInjectReducer({ key: 'checkoutModal', reducer });
  useInjectSaga({ key: 'checkoutModal', saga });

  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleConfirmOrder = () => {
    setShow(false);
    onRequestCreateOrder(user);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="checkout">
          <CheckoutResume data={data} />
          { /* <CheckoutLogin /> */ }
          { /* <CheckoutSignUp /> */ }
          <button 
            type="button"
            className="btn btn-success w-100"
            onClick={handleConfirmOrder}>
            Confirmar pedido
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

CheckoutModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  checkoutModal: makeSelectCheckoutModal(),
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
)(CheckoutModal);
