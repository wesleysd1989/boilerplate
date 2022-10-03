import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.REACT_APP_SCOPE === 'dev') {
  const tron = Reactotron.configure().use(reactotronRedux()).use(reactotronSaga()).connect();

  tron.clear();

  console.tron = tron;
}