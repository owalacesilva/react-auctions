/**
 *
 * CheckoutSignUp
 *
 */

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { memo, useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../../firebase';
// import PropTypes from 'prop-types';

function CheckoutSignUp({
  onChangeMode,
  onSubmit
}) {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const { 
      full_name: fullName, 
      phone_number: phoneNumber,
      document,
      email,
      password
    } = event.target.elements;
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(({ user } /* UserCredential */) => {
        console.log(`Sign Up user:`, user);

        updateProfile(user, {
          displayName: fullName.value,
          phoneNumber: phoneNumber.value,
          photoURL: document.value
        }).then(() => {
          // Profile updated!
          onSubmit(user);
        }).catch((error) => {
          // An error occurred
          onSubmit(user);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }, []);

  const [birthDate, setBirthDate] = useState('');
  const [documentCpf, setDocumentCpf] = useState('');

  const handleBirthDateChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');

    if (value.length <= 2) {
      setBirthDate(value);
    } else if (value.length <= 4) {
      setBirthDate(value.replace(/(\d{2})(\d{0,2})/, '$1/$2'));
    } else {
      setBirthDate(value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3'));
    }
  };

  const handleDocumentCpf = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');

    if (value.length <= 3) {
      setDocumentCpf(value);
    } else if (value.length <= 6) {
      setDocumentCpf(value.replace(/(\d{3})(\d{0,3})/, '$1.$2'));
    } else if (value.length <= 9) {
      setDocumentCpf(value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3'));
    } else {
      setDocumentCpf(value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4'));
    }
  };

  return (
    <div className="mb-3">
      <div className="alert alert-warning p-2 font-xss mb-1">
        <i className="bi bi-exclamation-circle"></i> Informe os dados corretos para recebimento das premiações.
      </div>
      <Form name="login" className="app-form app-form-cadastro" onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="text" className="text-muted font-xs">
            Nome Completo
          </Form.Label>
          <Form.Control type="text" className="form-control" id="full_name" name="full_name" placeholder="Informe seu nome e sobrenome" required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="email" className="text-muted font-xs">
            E-mail
          </Form.Label>
          <Form.Control type="email" className="form-control" id="email" name="email" required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="phone_number" className="text-muted font-xs">
            Número Celular
          </Form.Label>
          <Form.Control type="text" className="form-control" id="phone_number" name="phone_number" placeholder="(88) 88888-8888" required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="text" className="text-muted font-xs">
            Data Nascimento
          </Form.Label>
          <Form.Control 
            type="text" 
            className="form-control" 
            id="birth_date" 
            name="birth_date" 
            placeholder="Informe sua data de nascimento"
            value={birthDate}
            onChange={handleBirthDateChange}
            maxLength={10} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="text" className="text-muted font-xs">
            Documento CPF
          </Form.Label>
          <Form.Control 
            type="text" 
            className="form-control" 
            id="document" 
            name="document" 
            placeholder="Informe seu CPF" 
            required
            value={documentCpf}
            onChange={handleDocumentCpf}
            maxLength={14} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="password" className="text-muted font-xs">
            Senha
          </Form.Label>
          <Form.Control type="password" id="password" name="password" required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="password_confirmation" className="text-muted font-xs">
            Digite a senha novamente
          </Form.Label>
          <Form.Control type="password" id="password_confirmation" name="password_confirmation" required />
        </Form.Group>
        <Form.Group className="mb-2">
          <p className="app-termos-text text-muted font-xs mb-0">Ao realizar este pagamento e confirmar minha participação nesta ação entre amigos, declaro ter lido e concordado com os <a className="font-weight-500" target="_blank" href="/termos-de-uso">termos de uso</a> desta plataforma.</p>
        </Form.Group>
        <Form.Group className="mb-2">
          <Button type="submit" className="btn btn-success w-100">
            Concluir cadastro e pagar
          </Button>
          <a className="btn btn-link w-100 btn-sm text-decoration-none mt-2" onClick={onChangeMode}>
            Já possuo uma conta
          </a>
        </Form.Group>
      </Form>
    </div>
  );
}

CheckoutSignUp.propTypes = {};

export default memo(CheckoutSignUp);
