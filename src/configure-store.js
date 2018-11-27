import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import createReducer from './create-reducer';
import watchClientEffects from './bundles/client/sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preLoadedState = {}) {
    const store = createStore(
        createReducer(),
        preLoadedState,
        composeEnhancers(
            applyMiddleware(
                loggerMiddleware,
                sagaMiddleware,
            )
        )
    );

    sagaMiddleware.run(watchClientEffects);

    return store;
};
