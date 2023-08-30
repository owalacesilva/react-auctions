import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the menuModal state domain
 */

const selectMenuModalDomain = state => state.menuModal || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MenuModal
 */

const makeSelectMenuModal = () =>
  createSelector(
    selectMenuModalDomain,
    substate => substate,
  );

export default makeSelectMenuModal;
export { selectMenuModalDomain };
