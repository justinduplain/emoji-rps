import io from 'socket.io-client';
import store from './store';
import { gotPlayerOne, gotPlayerTwo } from './store/opponents';

const socket = io(window.location.origin);

export const initSocket = (socket) => {
  socket.on('connect', () => {
    console.log('Connected~');
  });
};

socket.on('gotPlayerOne', (player) => {
  store.dispatch(gotPlayerOne(player));
});

socket.on('gotPlayerTwo', (player) => {
  store.dispatch(gotPlayerTwo(player));
});

export default socket;

// **** socket middleware **** //

export const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'SET_PLAYER_ONE':
      socket.emit('setPlayerOne', action.player);
      break;
    case 'SET_PLAYER_TWO':
      socket.emit('setPlayerTwo', action.player);
      break;
    default:
  }
  return next(action);
};
