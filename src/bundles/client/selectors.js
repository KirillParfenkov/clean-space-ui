import { createSelector } from 'reselect';

const registerClientFetchingStateSelector = state => state.getIn(['client','register','fetching']);
const registerClientErrorSelector = state => state.getIn(['client','register', 'error']);
const registerClientDoneSelector = state => state.getIn(['client','register', 'done']);

export const selectRegisterClientFetchingState = createSelector(
    registerClientFetchingStateSelector,
    fetching => fetching,
);

export const selectRegisterClientError = createSelector(
    registerClientErrorSelector,
    error => error,
);
