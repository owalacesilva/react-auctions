import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auctionListPage state domain
 */

const selectAuctionListPageDomain = state =>
  state.auctionListPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuctionListPage
 */

const makeSelectAuctionListPage = () =>
  createSelector(
    selectAuctionListPageDomain,
    substate => substate,
  );

export default makeSelectAuctionListPage;
export { selectAuctionListPageDomain };
