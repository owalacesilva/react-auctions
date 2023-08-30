import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import HeaderLink from './HeaderLink';
import messages from './messages';
import LogoImage from '../../images/logo.png';
import { Container, NavDropdown, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <Navbar className="navbar" expand="lg" style={{ backgroundColor: "#161616" }}>
        <Container className="container container-common">
          <div className="navbar-header">
            <Navbar.Brand className="navbar-brand" href="/">
              <img src={LogoImage} className="d-inline-block align-text-top" style={{ maxWidth: "150px" }} />
            </Navbar.Brand>
          </div>
          <div className="d-flex flex-grow-1 flex-md-grow-0 justify-content-between justify-content-sm-end pl-2 pt-2 pt-md-0">
            <div className="dropdown">
              <a className="nav-link text-white">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" className="fa-icon" />
                <span className="position-absolute start-80 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </a>
            </div>
            <div className="dropdown">
              <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLinkIdiomas" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Alterar idioma">
                <FontAwesomeIcon icon={faBars} size="lg" className="fa-icon" />
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="navbarDropdownMenuLinkIdiomas">
                <a className="dropdown-item" href="">Inicio</a>
                <a className="dropdown-item" href="">Sorteios</a>
                <a className="dropdown-item" href="">Meus Números</a>
                <a className="dropdown-item" href="">Cadastro</a>
                <a className="dropdown-item" href="">Ganhadores</a>
                <a className="dropdown-item" href="">Termos de uso</a>
                <a className="dropdown-item" href="">Entre em contato</a>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
