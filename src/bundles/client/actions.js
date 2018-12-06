import { createActions } from 'redux-actions';

export default createActions({
    CLIENT: {
        REGISTER_REQUEST: [
            (payload, callback) => payload,
            (payload, callback) => ({ callback })
        ],
        REGISTER: payload => payload,
        CLEAR_REGISTER_FORM: payload => payload,
    }
});
