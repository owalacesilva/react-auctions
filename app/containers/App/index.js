/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import AuctionListPage from 'containers/AuctionListPage/Loadable';
import AuctionDetailPage from 'containers/AuctionDetailPage/Loadable';
import CheckoutPage from 'containers/CheckoutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useAuthState } from '../../firebase';

// import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <BrowserRouter>  
        <Switch>
          <Route exact path="/" component={AuctionListPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/sorteio" component={AuctionDetailPage} />
          <AuthenticatedRoute path="/checkout" component={CheckoutPage}/>
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      { /*<GlobalStyle />*/ }
    </AppWrapper>
  );
}
