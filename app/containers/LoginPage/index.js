/**
 *
 * LoginPage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onLogin = (event) => {
    event.preventDefault();
    
    const { email, password } = event.target.elements;
    
    let history = useHistory();
    history.push('/');

    /*signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });*/
  }

  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <div className="black-bar fuse" />
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <form className="app-form" onSubmit={onLogin} id="form-checkout">
            <div className="row mb-2">
              <div className="col-12 mb-2">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" id="email" name="email" className="form-control" />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" id="password" name="password" className="form-control" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success w-100">Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
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
)(LoginPage);
