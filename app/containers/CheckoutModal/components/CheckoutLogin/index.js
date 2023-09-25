/**
 *
 * CheckoutLogin
 *
 */

import { signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../../../../firebase';

function CheckoutLogin({ onChangeMode, onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(({ user } /* UserCredential */) => {
        onSubmit(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="mb-3">
      <Form
        name="login"
        className="app-form app-form-cadastro"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-2 form-email-campo-cadastro">
          <Form.Label htmlFor="email" className="text-muted font-xs">
            E-mail
          </Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2 form-email-campo-cadastro">
          <Form.Label htmlFor="password" className="text-muted font-xs">
            Senha
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Button type="submit" className="btn btn-success w-100">
            Entrar e pagar
          </Button>
          <a
            className="btn btn-link w-100 btn-sm text-decoration-none mt-2"
            onClick={onChangeMode}
          >
            Quero me cadastrar
          </a>
        </Form.Group>
      </Form>
    </div>
  );
}

CheckoutLogin.propTypes = {
  onChangeMode: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default memo(CheckoutLogin);
