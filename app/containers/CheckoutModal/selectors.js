import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkoutModal state domain
 */

const selectCheckoutModalDomain = state => state.checkoutModal || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CheckoutModal
 */

const makeSelectCheckoutModal = () =>
  createSelector(
    selectCheckoutModalDomain,
    substate => substate,
  );

export default makeSelectCheckoutModal;
export { selectCheckoutModalDomain };
