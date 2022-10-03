import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createStore from './createStore';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import '../config/reactotronConfig';

// const persistConfig = {
//     key: 'root',
//     storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMonitor = process.env.REACT_APP_SCOPE === 'dev' ? console.tron.createSagaMonitor() : null;

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// const middlewares = [sagaMiddleware];

// sagaMiddleware.run(rootSaga);

// const store = createStore(persistedReducer, middlewares);

// export default store;