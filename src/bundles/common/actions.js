import { createActions } from 'redux-actions';

export default createActions({
    COMMON: {
        LOGIN_REQUEST: [
            (payload, callback) => payload,
            (payload, callback) => ({ callback })
        ],
        LOGIN: payload => payload,
        CLEAR_LOGIN_FORM: payload => payload,
    }
})
