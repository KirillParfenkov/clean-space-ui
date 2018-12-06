import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

import actions from './actions';

const defaultValue = Map({
    login: Map({
        fetching: false,
    })
});

export default handleActions({
    [actions.common.loginRequest] : (state, action) => {
        return state.withMutations((state) => {
            state.setIn(['login', 'fetching'], true);
            state.deleteIn(['login', 'error']);
        });
    },
    [actions.common.login] : {
        next(state, action) {
            return state.withMutations(state => {
                state.setIn(['login', 'fetching'], false);
                state.setIn(['login', 'user'], action.payload);
            });
        },
        throw(state, action) {
            return state.withMutations((state) => {
                state.setIn(['login', 'fetching'], false);
                state.setIn(['login', 'error'], action.payload);
            });
        }
    },
    [actions.common.clearLoginForm] : (state, action) => {
        return state.deleteIn(['login', 'error']);
    }
}, defaultValue);
