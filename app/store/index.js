import { combineReducers } from 'redux';
import playersReducer from './players';
import opponentsReducer from './opponents';

const appReducer = combineReducers({
  players: playersReducer,
  opponents: opponentsReducer,
});

export default appReducer;
