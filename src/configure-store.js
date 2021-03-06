import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import createReducer from './create-reducer';
import watchClientEffects from 'bundles/client/sagas';
import watchCommonEffects from 'bundles/common/sagas';
import watchServiceEfects from 'bundles/service/sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preLoadedState = fromJS({})) {
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
    sagaMiddleware.run(watchCommonEffects);
    sagaMiddleware.run(watchServiceEfects);

    return store;
};
