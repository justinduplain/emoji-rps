import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Opponents = () => {
  const dispatch = useDispatch();
  let { playerOne, playerTwo } = useSelector((state) => state.opponents);
  return (
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-4">
        <div className="card bg-default">
          <div className="card-header">
            <div className="player-icon">
              {playerOne ? (
                <img src={playerOne.imageUrl} alt={playerOne.name + ' icon'} />
              ) : (
                <img
                  src="img/question-mark.png"
                  alt="question-mark"
                  className="opacity-50"
                />
              )}
            </div>
          </div>
          <div className="card-body player-name">
            <h4>
              {playerOne ? (
                playerOne.name
              ) : (
                <span className="text-muted">waiting...</span>
              )}
            </h4>
          </div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <div>
          <h2 className="huge"> vs </h2>
          <button
            type="button"
            className="btn btn-primary btn-startgame"
            // onClick={() =>
            //   setOpponents(player.id, player.name, player.imageUrl)
            // }
            disabled={
              playerOne &&
              playerOne.id &&
              playerTwo &&
              playerTwo.id &&
              playerOne.id !== playerTwo.id
                ? false
                : true
            }
          >
            <img src="/img/shoot.png" alt="shoot! (play)" />
          </button>
        </div>
      </div>
      <div className="col-4">
        <div className="card bg-default">
          <div className="card-header">
            <div className="player-icon">
              {playerTwo ? (
                <img src={playerTwo.imageUrl} alt={playerTwo.name + ' icon'} />
              ) : (
                <img
                  src="img/question-mark.png"
                  alt="question-mark"
                  className="opacity-50"
                />
              )}
            </div>
          </div>
          <div className="card-body player-name">
            <h4>
              {playerTwo ? (
                playerTwo.name
              ) : (
                <span className="text-muted">waiting</span>
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opponents;
