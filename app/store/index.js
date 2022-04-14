import { combineReducers } from 'redux';
import playersReducer from './players';

const appReducer = combineReducers({
  players: playersReducer,
});

export default appReducer;
