import { takeLatest, all, call, put } from 'redux-saga/effects';

import actions from './actions';
import api from '../../api';
import { AppError } from '../../utils';

function* loginRequestHandler({payload, meta: { callback }}) {
    try {
        const response = yield call(api.postLoginRegister, payload);
        if (response.ok || response.redirect) {
            const token = yield call([response, 'text']);
            yield put(actions.common.login(token, callback));
            if (callback) callback();

        } else {
            const error = yield call([response, 'json']);
            if (error.name) {
                yield put(actions.client.register(AppError(error.name, error.message), response));
            } else {
                yield put(actions.client.register(AppError('ApiError', 'Login error'), response));
            }
        }
    } catch (e) {
        console.log(e);
    }
}

function* loginHandler({payload}) {
    sessionStorage.setItem('token', payload);
    yield updateLogin(payload);
}

function* recoverLoginHandler() {
    const token = sessionStorage.getItem('token');
    yield updateLogin(token);
}

function* updateLogin(token) {
    try {
        const [headerInBase64, userInBase64, signature] = token.split('.');
        const user = JSON.parse(atob(userInBase64));
        yield put(actions.common.updateLogin({user, token}));
    } catch (e) {
        console.log(e);
    }
}


function* watchLoginRequest() {
    yield takeLatest(actions.common.loginRequest, loginRequestHandler);
}

function* watchLogin() {
    yield takeLatest(actions.common.login, loginHandler);
}

function* watchRecoverLogin() {
    yield takeLatest(actions.common.recoverLogin, recoverLoginHandler);
}

export default function* watchCommonEffects() {
    yield all([
        watchLoginRequest(),
        watchLogin(),
        watchRecoverLogin(),
    ]);
}
