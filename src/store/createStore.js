import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.REACT_APP_SCOPE === 'dev'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  return configureStore(reducers, enhancer);
};