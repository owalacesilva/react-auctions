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
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import AuctionListPage from 'containers/AuctionListPage/Loadable';
import AuctionDetailPage from 'containers/AuctionDetailPage/Loadable';
import CheckoutPage from 'containers/CheckoutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

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
          <Route path="/features" component={FeaturePage} />
          { /*<Route path="/sorteios" component={AuctionListPage} /> */ }
          <Route path="/sorteio" component={AuctionDetailPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      { /*<GlobalStyle />*/ }
    </AppWrapper>
  );
}
