import { Store, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

import rootReducer, { RootState, rootSaga } from './redux';

export default function configureStore(history: History, initialState: RootState): Store<RootState> {

    let compose;

    const isDevelopment = process.env.REACT_APP_ENV === 'development1';

    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    if( isDevelopment ) {
        compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger()));
    } else {
        compose = composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware));
    }

    const store = createStore(
        rootReducer(history),
        initialState,
        compose
    );
    sagaMiddleware.run(rootSaga);
    return store
}