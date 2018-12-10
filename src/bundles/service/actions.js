import { createActions } from 'redux-actions';

export default createActions({
    SERVICE: {
        REGISTER_REQUEST: [
            (payload, callback) => payload,
            (payload, callback) => ({ callback })
        ],
        REGISTER: payload => payload,
        CLEAR_REGISTER_FORM: payload => payload,
    }
});
