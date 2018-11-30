import { takeLatest, all, call, put } from 'redux-saga/effects';
import actions from './actions';
import api from '../../api';

const ApiError = message => Error(`Api error: ${message}`);


export function* registerClient(action) {
    const response = yield call(api.postClientRegister, action.payload);
    console.log(response);
    if (response.ok || response.redirected) {

        const user = yield call([response, 'json']);
        yield put(actions.client.register(user));
    } else {
        yield put(actions.client.register(ApiError('can not register client'), response));
    }
}

export function* watchCreateClient() {
    yield takeLatest(actions.client.registerRequest, registerClient);
}

export default function* watchClientEffects() {
    yield all([
        watchCreateClient()
    ]);
}
