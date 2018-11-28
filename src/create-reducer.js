import { combineReducers } from 'redux-immutable';
import commonReducer from './bundles/common/reducer';
import clientReducer from './bundles/client/reducer';

export default function createReducer() {
    return combineReducers({
        common: commonReducer,
        client: clientReducer,
    });
}
