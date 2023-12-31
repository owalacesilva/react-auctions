/**
 *
 * CheckoutModal
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Modal } from 'react-bootstrap';
import { onAuthStateChanged } from 'firebase/auth';
import makeSelectCheckoutModal from './selectors';
import reducer from './reducer';
import saga from './saga';
import { auth } from '../../firebase';
import CheckoutResume from './components/CheckoutResume';
import CheckoutLogin from './components/CheckoutLogin';
import CheckoutSignUp from './components/CheckoutSignUp';
import CheckoutLoggedUser from './components/CheckoutLoggedUser';

export function CheckoutModal({
  campaignName,
  quotesQuantity,
  onClose,
  onRequestCreateOrder,
}) {
  useInjectReducer({ key: 'checkoutModal', reducer });
  useInjectSaga({ key: 'checkoutModal', saga });

  const [show, setShow] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setLoggedUser);
  }, []);

  const handleClose = () => {
    setShow(false);
    onClose(false);
  };

  const handleConfirmOrder = () => {
    setShow(false);
    onRequestCreateOrder(loggedUser);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton={handleClose}>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="checkout">
          <CheckoutResume
            campaignName={campaignName}
            quotesQuantity={quotesQuantity}
          />
          {loggedUser ? (
            <>
              <CheckoutLoggedUser loggedUser={loggedUser} />
              <button
                type="button"
                className="btn btn-success w-100 mt-2"
                onClick={handleConfirmOrder}
              >
                Confirmar pedido
              </button>
              <a
                className="btn btn-link w-100 btn-sm text-decoration-none mt-2"
                onClick={() => {
                  setLoggedUser(null);
                  setIsSignUp(true);
                }}
              >
                Utilizar outra conta
              </a>
            </>
          ) : (
            <>
              {isSignUp ? (
                <CheckoutSignUp
                  onChangeMode={() => setIsSignUp(false)}
                  onSubmit={setLoggedUser}
                />
              ) : (
                <CheckoutLogin
                  onChangeMode={() => setIsSignUp(true)}
                  onSubmit={setLoggedUser}
                />
              )}
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

CheckoutModal.propTypes = {
  campaignName: PropTypes.string.isRequired,
  quotesQuantity: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onRequestCreateOrder: PropTypes.func.isRequired,
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
