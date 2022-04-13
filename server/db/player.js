const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('player', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: '/img/char/mouse.png',
  },
});
