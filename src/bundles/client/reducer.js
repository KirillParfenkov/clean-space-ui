import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import actions from './actions';

const defaultValue = Map({
    register: Map({
        fetching: false,
    })
});

export default handleActions({
    [actions.client.register] : (state, action) => {
        return state.setIn(['register', 'fetching'], true);
    }
}, defaultValue);
