import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import appReducer from './store/';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { socketMiddleware } from './socket';

let middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
  createLogger({ collapsed: true }),
  socketMiddleware,
];

//Base case reducer
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
