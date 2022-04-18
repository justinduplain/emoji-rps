import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import socket from '../socket';
import { fetchPlayers } from '../store/players';
import { setPlayerOne, setPlayerTwo } from '../store/opponents';
import Opponents from './opponents';

const PlayerSelect = () => {
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  const dispatch = useDispatch();
  const { players, opponents } = useSelector((state) => state);

  const setOpponents = (id, name, imageUrl) => {
    if (!opponents.playerOne || opponents.playerOne.socketId == socket.id) {
      dispatch(setPlayerOne({ id, name, imageUrl, socketId: socket.id }));
    } else if (
      !opponents.playerTwo ||
      opponents.playerTwo.socketId == socket.id
    ) {
      dispatch(setPlayerTwo({ id, name, imageUrl, socketId: socket.id }));
    } else {
      console.log('Session is full');
      alert('Sorry, game is full.');
    }
  };

  return (
    <div>
      <Opponents />
      <div className="row">
        <h2>Select Your Profile</h2>
        {players.map((player) => (
          <div
            className="col-sm-3 d-flex justify-content-center"
            key={player.id}
            id={player.id}
          >
            <div className="card" style={{ width: 12 + 'rem' }}>
              <img
                src={player.imageUrl}
                className="card-img-top"
                alt={player.imageUrl}
              />
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    setOpponents(player.id, player.name, player.imageUrl)
                  }
                >
                  {player.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelect;
