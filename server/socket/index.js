const Player = require('../db/player');
const Game = require('../db/game');
const Round = require('../db/round');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(socket.id, ' connected.');

    socket.on('setPlayerOne', (player) => {
      socket.broadcast.emit('gotPlayerOne', player);
    });

    socket.on('setPlayerTwo', (player) => {
      socket.broadcast.emit('gotPlayerTwo', player);
    });
  });
};
