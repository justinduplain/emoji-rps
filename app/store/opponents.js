import axios from 'axios';

const SET_PLAYER_ONE = 'SET_PLAYER_ONE';
const SET_PLAYER_TWO = 'SET_PLAYER_TWO';

export const setPlayerOne = (player) => {
  return {
    type: SET_PLAYER_ONE,
    player,
  };
};

export const setPlayerTwo = (player) => {
  return {
    type: SET_PLAYER_TWO,
    player,
  };
};

export default function opponentsReducer(
  state = { playerOne: null, playerTwo: null },
  action
) {
  switch (action.type) {
    case SET_PLAYER_ONE:
      return { ...state, playerOne: action.player };
    case SET_PLAYER_TWO:
      return { ...state, playerTwo: action.player };
    default:
      return state;
  }
}
