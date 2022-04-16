import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers } from '../store/players';

import Opponents from './opponents';

const PlayerSelect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);
  const players = useSelector((state) => state.players);
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
                <a href="#" className="btn btn-primary">
                  {player.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelect;
