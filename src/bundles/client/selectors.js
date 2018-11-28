import { createSelector } from 'reselect';

const registerClientFetchingStateSelector = state => state.getIn(['client','register']);

export const selectRegisterClientFetchingState = createSelector(
    registerClientFetchingStateSelector,
    fetching => fetching,
);
