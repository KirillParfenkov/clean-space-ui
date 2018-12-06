import { takeLatest, all, call, put } from 'redux-saga/effects';
import { AppError } from '../../utils';
import actions from './actions';
import api from '../../api';

export function* registerClient({ payload, meta: { callback }}) {
    try {
        const response = yield call(api.postClientRegister, payload);
        if (response.ok || response.redirected) {

            const user = yield call([response, 'json']);
            yield put(actions.client.register(user));
            if (callback) callback();

        } else {
            const error = yield call([response, 'json']);
            if (error.name) {
                yield put(actions.client.register(AppError(error.name, error.message), response));
            } else {
                yield put(actions.client.register(AppError('ApiError', 'can not register client'), response));
            }
        }
    } catch (e) {
        console.log(e);
        yield put(actions.client.register(e));
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
