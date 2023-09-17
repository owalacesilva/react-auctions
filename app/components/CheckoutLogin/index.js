/**
 *
 * CheckoutLogin
 *
 */

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { memo } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../../firebase';
// import PropTypes from 'prop-types';

function CheckoutLogin({
  onChangeMode,
  onSubmit
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { email, password } = event.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(({ user } /* UserCredential */) => {
        console.log(`Logged user:`, user);
        onSubmit(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="mb-3">
      <Form name="login" className="app-form app-form-cadastro" onSubmit={handleSubmit}>
        <Form.Group className="mb-2 form-email-campo-cadastro">
          <Form.Label htmlFor="email" className="text-muted font-xs">
            E-mail
          </Form.Label>
          <Form.Control type="email" className="form-control" id="email" name="email" required />
        </Form.Group>
        <Form.Group className="mb-2 form-email-campo-cadastro">
          <Form.Label htmlFor="password" className="text-muted font-xs">
            Senha
          </Form.Label>
          <Form.Control type="password" id="password" name="password" required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Button type="submit" className="btn btn-success w-100">
            Entrar e pagar
          </Button>
          <a className="btn btn-link w-100 btn-sm text-decoration-none mt-2" onClick={onChangeMode}>
            Quero me cadastrar
          </a>
        </Form.Group>
      </Form>
    </div>
  );
}

CheckoutLogin.propTypes = {};

export default memo(CheckoutLogin);
