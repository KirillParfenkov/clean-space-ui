import { createSelector } from 'reselect';

const loginFetchingStateSelector = state => state.getIn(['common','login','fetching']);
const loginErrorSelector = state => state.getIn(['common','login', 'error']);
const loggedUserSelector = state => state.getIn(['common','login', 'user']);

export const selectLoginFetchingState = createSelector(
    loginFetchingStateSelector,
    fetching => fetching,
);

export const selectLoginError = createSelector(
    loginErrorSelector,
    error => error,
);

export const selectLoggedUser = createSelector(
    loggedUserSelector,
    user => user,
);
