import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import actions from './actions';

export default handleActions({
    [actions.client.register] : (state, action) => {
        return state;
    }
}, new Map());
