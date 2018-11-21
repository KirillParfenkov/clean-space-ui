import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import createReducer from './create-reducer';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preLoadedState = {}) {
    return createStore(
        createReducer(),
        preLoadedState,
        composeEnhancers(
            applyMiddleware(
                loggerMiddleware,
                sagaMiddleware,
            )
        )
    )
};
