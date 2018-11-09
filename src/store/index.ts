import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  // connectRouter(history)(rootReducer), // new root reducer with router state
  createRootReducer(history),
  {},
  compose(
    applyMiddleware(
      // for dispatching history actions
      // ... other middlewares ...
      ...middlewares
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;
