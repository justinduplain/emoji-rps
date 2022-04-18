import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import socket from '../socket'
import { fetchPlayers } from '../store/players'
import { setPlayerOne, setPlayerTwo } from '../store/opponents'
import Opponents from './opponents'

const GameBoard = () => {
  // useEffect(() => {
  //   dispatch(fetchPlayers());
  // }, []);

  // const dispatch = useDispatch();
  // const { players, opponents } = useSelector((state) => state);

  // const setOpponents = (id, name, imageUrl) => {
  //   if (!opponents.playerOne || opponents.playerOne.socketId == socket.id) {
  //     dispatch(setPlayerOne({ id, name, imageUrl, socketId: socket.id }));
  //   } else if (
  //     !opponents.playerTwo ||
  //     opponents.playerTwo.socketId == socket.id
  //   ) {
  //     dispatch(setPlayerTwo({ id, name, imageUrl, socketId: socket.id }));
  //   } else {
  //     console.log('Session is full');
  //     alert('Sorry, game is full.');
  //   }
  // };

  return (
    <div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-4">
          <div className="card bg-default">
            <div className="card-header">
              <div className="player-icon">
                <img
                  src="img/char/monkey.png"
                  alt="monkey face emoji"
                  aria-hidden="true"
                />
                <h3 className="sr-only">Player</h3>
              </div>
            </div>
            <div className="card-body score-area">
              <div className="scorecard-body" id="user-score">
                0
              </div>
            </div>
            <div className="card-footer">
              <div className="aggregates">
                <div>
                  <img src="img/rock.png" />
                  <span id="userRockCount">0</span>
                </div>
                <div>
                  <img src="img/paper.png" />
                  <span id="userPaperCount">0</span>
                </div>
                <div>
                  <img src="img/scissors.png" />
                  <span id="userScissorsCount">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <div>
            <h2 className="huge"> vs </h2>
            <p>
              <small>First to 5 wins</small>
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="card bg-default">
            <div className="card-header">
              <div className="comp-icon">
                <img
                  src="img/robot.png"
                  alt="robot face emoji"
                  aria-hidden="true"
                />
                <h3 className="sr-only">Computer</h3>
              </div>
            </div>
            <div className="card-body score-area">
              <div className="scorecard-body" id="comp-score">
                0
              </div>
            </div>
            <div className="card-footer">
              <div className="aggregates">
                <div></div>
                <div>
                  <img src="img/rock.png" />
                  <span id="compRockCount">0</span>
                </div>
                <div>
                  <img src="img/paper.png" />
                  <span id="compPaperCount">0</span>
                </div>
                <div>
                  <img className="flip-horizontal" src="img/scissors.png" />
                  <span id="compScissorsCount">0</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-9">
          <div className="card">
            <h5 className="card-header">
              <span id="round-number">Round: 1</span>
            </h5>
            <div className="card-body" id="play-input">
              <p className="card-text" id="play-confirm">
                Shoot!
              </p>
              <div className="play-buttons">
                <button
                  type="button"
                  id="rockSubmit"
                  className="btn btn-outline-primary btn-lg"
                >
                  <img src="img/rock.png" />
                </button>
                <button
                  type="button"
                  id="paperSubmit"
                  className="btn btn-outline-primary btn-lg"
                >
                  <img src="img/paper.png" />
                </button>
                <button
                  type="button"
                  id="scissorsSubmit"
                  className="btn btn-outline-primary btn-lg"
                >
                  <img src="img/scissors.png" />
                </button>
              </div>
              <div className="playsubmit">
                <button
                  type="button"
                  id="play-submit"
                  className="btn btn-outline-primary btn-lg"
                >
                  <img src="img/shoot.png" alt="shoot emoji" />
                  <span id="user-choice"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th colspan="2" className="player-icon">
                  Player
                </th>
                <th></th>
                <th colspan="2" className="comp-icon">
                  <img
                    src="img/robot.png"
                    alt="robot face emoji"
                    aria-hidden="true"
                  />
                  <h3 className="sr-only">Computer</h3>
                </th>
              </tr>
            </thead>
            <tbody id="game-history"></tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GameBoard
