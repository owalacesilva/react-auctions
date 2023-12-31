import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkoutPage state domain
 */

const selectCheckoutPageDomain = state => state.checkoutPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CheckoutPage
 */

const makeSelectCheckoutPage = () =>
  createSelector(
    selectCheckoutPageDomain,
    substate => substate,
  );

export default makeSelectCheckoutPage;
export { selectCheckoutPageDomain };
