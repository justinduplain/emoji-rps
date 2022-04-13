const db = require('./database');
const Player = require('./player');
const Game = require('./game');
// const Round = require('./round');

Player.Games = Player.hasMany(Game);
Game.Players = Game.belongsToMany(Player, { through: 'Games_Players' });
Game.belongsTo(Player);
// Game.Rounds = Game.hasMany(Round, { through: 'Game_Rounds' });
// Round.belongsTo(Game, { through: 'Game_Rounds' });

module.exports = {
  db,
  Player,
  Game,
};
