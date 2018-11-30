import { createActions } from 'redux-actions';

export default createActions({
    CLIENT: {
        REGISTER_REQUEST: payload => payload,
        REGISTER: payload => payload,
    }
});
