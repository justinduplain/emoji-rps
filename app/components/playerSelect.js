import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers } from '../store/players';

const PlayerSelect = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <div>
      <div className="row">
        {players.forEach((player) => {
          return (
            <div
              className="col-sm-4 d-flex justify-content-center"
              key="player.id"
              id="player.id"
            >
              <div className="card" style={{ width: 18 + 'rem' }}>
                <img
                  src={player.imageUrl}
                  className="card-img-top"
                  alt={player.imageUrl}
                />
                <div className="card-body">
                  <h5 className="card-title">{player.name}</h5>
                  <a href="#" className="btn btn-primary">
                    Play as {player.name}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerSelect;
