import { combineReducers } from 'redux';
import commonReducer from './bundles/common/reducer';

export default function createReducer() {
    return combineReducers({
        common: commonReducer,
    });

}
