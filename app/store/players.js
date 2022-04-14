import axios from 'axios';

const SET_PLAYERS = 'SET_PLAYERS';

export const setPlayers = (players) => {
  return {
    type: SET_PLAYERS,
    players,
  };
};

export const fetchPlayers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/players');
      dispatch(setPlayers(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function playersReducer(state = [], action) {
  switch (action.type) {
    case SET_PLAYERS:
      return [...action.players];
    default:
      return state;
  }
}
