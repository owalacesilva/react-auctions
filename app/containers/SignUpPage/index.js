/**
 *
 * SignUpPage
 *
 */

import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignUpPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function SignUpPage() {
  useInjectReducer({ key: 'signUpPage', reducer });
  useInjectSaga({ key: 'signUpPage', saga });

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const { email, password} = event.target.elements;
    
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
    } catch(error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>SignUpPage</title>
        <meta name="description" content="Description of SignUpPage" />
      </Helmet>
      <div className="black-bar fuse" />
      <div className="container container-common px-0">
        <div className="main-content py-3">
          <form className="app-form app-form-cadastro" onSubmit={handleSubmit} id="form-checkout">
            <div className="row mb-2 appForm">
              <div className="col-12 mb-2">
                <label htmlFor="nome" className="form-label">Nome completo</label>
                <input type="text" className="form-control" id="nome" name="nome" required placeholder="Informe seu nome e sobrenome" />
              </div>
              <div className="col-12 mb-2 form-email-campo-cadastro">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="telefoneCadastro" className="form-label">Celular</label>
                <input className="form-control" name="telefone" id="telefoneCadastro" required />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="rtelefone" className="form-label">Confirme o celular</label>
                <input className="form-control" name="rtelefone" id="rtelefone" required />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="dataNascimento" className="form-label">Data de Nascimento <span className="text-muted font-xs">(opcional)</span></label>
                <input pattern="\d{1,2}/\d{1,2}/\d{4}" className="form-control" id="dataNascimento" name="dataNascimento" placeholder="Informe sua data de nascimento" />
              </div>
              <div className="col-12 mb-2">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input className="form-control" name="cpf" placeholder="Informe seu CPF" required />
              </div>
              <div className="col-12 mb-2">
                <div className="alert alert-warning p-2 font-xss mb-1"><i className="bi bi-exclamation-circle"></i> Informe os dados corretos para recebimento das premiações.</div>
                <p className="app-termos-text text-muted font-xs mb-0">Ao realizar este pagamento e confirmar minha participação nesta ação entre amigos, declaro ter lido e concordado com os <a className="font-weight-500" target="_blank" href="/termos-de-uso">termos de uso</a> desta plataforma.</p>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success w-100">
                  Concluir cadastro e pagar<i className="bi bi-arrow-right-circle"></i>
                </button>
                <button type="submit" className="btn btn-link w-100 btn-sm text-decoration-none mt-3">
                  Já possuo uma conta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

SignUpPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUpPage: makeSelectSignUpPage(),
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
)(SignUpPage);
