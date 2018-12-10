import { createSelector } from 'reselect';

const registerServiceFetchingStateSelector = state => state.getIn(['service','register','fetching']);
const registerServiceErrorSelector = state => state.getIn(['service','register', 'error']);

export const selectRegisterServiceFetchingState = createSelector(
    registerServiceFetchingStateSelector,
    fetching => fetching,
);

export const selectRegisterServiceError = createSelector(
    registerServiceErrorSelector,
    error => error,
);
