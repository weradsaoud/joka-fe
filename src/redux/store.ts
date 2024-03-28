import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'; // Import your root reducer
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga); // start the middleware
export default store;
export type RootState = ReturnType<typeof rootReducer>; // Define root state type
