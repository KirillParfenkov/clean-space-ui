import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

import actions from './actions';

const defaultValue = Map({
    register: Map({
        fetching: false,
    })
});

export default handleActions({
    [actions.client.registerRequest] : (state, action) => {
        return state.withMutations((state) => {
            state.setIn(['register', 'fetching'], true);
            state.deleteIn(['register', 'error']);
        });
    },
    [actions.client.register] : {
        next(state, action) {
            return state.setIn(['register', 'fetching'], false);
        },
        throw(state, action) {
            return state.withMutations((state) => {
                state.setIn(['register', 'error'], action.payload);
                state.setIn(['register', 'fetching'], false);
            });
        }
    },
    [actions.client.clearRegisterForm] : (state, action) => {
        return state.deleteIn(['register', 'error']);
    }
}, defaultValue);
