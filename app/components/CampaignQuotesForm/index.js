/**
 *
 * CampaignQuotesForm
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CurrencyFormat from '../CurrencyFormat';

function CampaignQuotesForm({
  costPrice,
  onFormSubmit
}) {
  const [quotesQuantity, setQuotesQuantity] = useState(0);

  const addQuote = (quantity) => (event) => {
    if (quotesQuantity >= 500) return false;

    setQuotesQuantity(quotesQuantity + quantity);
  }

  const removeQuote = (quantity) => (event) => {
    if (quotesQuantity == 1) return false;

    setQuotesQuantity(quotesQuantity - quantity);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(quotesQuantity);
  }

  return (
    <div>
      <Form name="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="quantity">
          <div className="card my-2">
            <div className="card-body">
              <div className="text-center mb-3 pt-2">
                <Form.Label className="text-muted font-xs">
                  Selecione a quantidade de números
                </Form.Label>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="sale-item">
                  <div className="item p-2 me-2 mb-2 flex-column" onClick={addQuote(5)}>
                    <h3 className="mb-1">
                      <small className="text-dark">+</small>05
                    </h3>
                    <p className="text-muted font-xss text-uppercase m-0">
                      Selecionar
                    </p>
                  </div>
                  <div className="item p-2 me-2 mb-2 flex-column popular" onClick={addQuote(10)}>
                    <h3 className="mb-1">
                      <small className="text-dark">+</small>10
                    </h3>
                    <p className="text-muted font-xss text-uppercase">
                      Selecionar
                    </p>
                  </div>
                  <div className="item p-2 me-2 mb-2 flex-column" onClick={addQuote(50)}>
                    <h3 className="mb-1">
                      <small className="text-dark">+</small>50
                    </h3>
                    <p className="text-muted font-xss text-uppercase">
                      Selecionar
                    </p>
                  </div>
                  <div className="item p-2 me-2 mb-2 flex-column" onClick={addQuote(100)}>
                    <h3 className="mb-1">
                      <small className="text-dark">+</small>100
                    </h3>
                    <p className="text-muted font-xss text-uppercase">
                      Selecionar
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="vendasExpressNums d-flex align-items-center">
                    <div className="left pointer">
                      <div className="addNumero numeroChange text-muted" onClick={removeQuote(1)}>
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                      </div>
                    </div>
                    <div className="center">
                      <Form.Control
                        type="number"
                        name="quantity"
                        aria-label="Quantidade de números"
                        readOnly
                        min={1}
                        max={500}
                        value={quotesQuantity}
                      />
                    </div>
                    <div className="right pointer">
                      <div className="removeNumero numeroChange text-muted" onClick={addQuote(1)}>
                        <FontAwesomeIcon icon={faPlus} size="xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="submit">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">
              <div className="row align-items-center">
                <div className="col pe-0 text-nowrap">
                  <span>Participar do sorteio</span>
                </div>
                <div className="col-auto ps-0">
                  <CurrencyFormat value={quotesQuantity * costPrice} />
                </div>
              </div>
            </button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

CampaignQuotesForm.propTypes = {};

export default memo(CampaignQuotesForm);
