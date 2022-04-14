const db = require('./database');
const Player = require('./player');
const Game = require('./game');
// const Round = require('./round');

Player.getLivePlayers = async function () {
  return await this.findAll({
    where: { isComputer: false },
    attributes: ['id', 'name', 'imageUrl'],
  });
};

Player.getPlayer = async function (id) {
  return await this.findAll({ where: { id }, include: Game });
};

Player.getComputerPlayers = async function () {
  return await this.findAll({ where: { isComputer: true } });
};

Player.hasMany(Game);
Game.belongsToMany(Player, { through: 'Games_Players' });
Game.belongsTo(Player);
// Game.Rounds = Game.hasMany(Round, { through: 'Game_Rounds' });
// Round.belongsTo(Game, { through: 'Game_Rounds' });

module.exports = {
  db,
  Player,
  Game,
};
