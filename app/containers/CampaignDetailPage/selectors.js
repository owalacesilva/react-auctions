import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auctionDetailPage state domain
 */

const selectAuctionDetailPageDomain = state =>
  state.auctionDetailPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuctionDetailPage
 */

const makeSelectAuctionDetailPage = () =>
  createSelector(
    selectAuctionDetailPageDomain,
    substate => substate,
  );

export default makeSelectAuctionDetailPage;
export { selectAuctionDetailPageDomain };
