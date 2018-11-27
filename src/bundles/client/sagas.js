import { takeLatest, all, call } from 'redux-saga/effects';
import actions from './actions';


export function* createClient(action) {
    yield call(console.log, action);
}

export function* watchCreateClient() {
    yield takeLatest(actions.client.register, createClient);
}

export default function* watchClientEffects() {
    yield all([
        watchCreateClient()
    ]);
}
