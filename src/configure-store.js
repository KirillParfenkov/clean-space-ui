import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createReducer from './create-reducer';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preLoadedState = {}) {
    return createStore(
        createReducer(),
        preLoadedState,
        composeEnhancers(
            applyMiddleware(
                loggerMiddleware,
            )
        )
    )
};
