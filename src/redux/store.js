import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import sagas and reducer
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	{},
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export { store };
