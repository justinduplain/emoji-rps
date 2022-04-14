const Player = require('../db/player');
const Game = require('../db/game');
const Round = require('../db/round');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(socket.id, ' has made a connection to the server!');

    socket.on('new-player', (player) => {
      socket.broadcast.emit('new-player', player);
    });

    socket.on('new-game', (game) => {
      socket.broadcast.emit('new-game', game);
    });

    socket.on('new-play', (play) => {
      socket.broadcast.emit('new-play', play);
    });
  });
};
