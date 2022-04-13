const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('game', {
  winnerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
  },
  playerOneId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
  },
  playerTwoId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
  },
  gameData: {
    type: Sequelize.JSON,
  },
});
