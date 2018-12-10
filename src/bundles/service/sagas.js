import { takeLatest, all, call, put } from 'redux-saga/effects';

import { AppError } from 'utils';
import actions from './actions';
import api from 'api';

function* registerService({ payload, meta: { callback }}) {
    try {
        const response = yield call(api.postUserRegister, {
            ...payload,
            role: 'service',
        });
        if (response.ok || response.redirected) {
            const service = yield call([response, 'json']);
            yield put(actions.service.register(service));
            console.log(callback)
            if (callback) callback();

        } else {
            const error = yield call([response, 'json']);
            if (error.name) {
                yield put(actions.service.register(AppError(error.name, error.message), response));
            } else {
                yield put(actions.service.register(AppError('ApiError', 'can not register service'), response));
            }
        }
    } catch (e) {
        console.log(e);
        yield put(actions.service.register(e));
    }
}

function* watchRegisterService() {
    yield takeLatest(actions.service.registerRequest, registerService);
}

export default function* watchServiceEffects() {
    yield all([
        watchRegisterService(),
    ]);
}
