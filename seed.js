const { db, Player, Game } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    const compPlayers = [
      '8bit',
      'alien',
      'clown',
      'goblin',
      'ogre',
      'poo',
      'red robot',
      'robot',
      'skull',
    ];
    compPlayers.forEach(async (player) => {
      await Player.create({
        name: player.charAt(0).toUpperCase() + player.slice(1),
        imageUrl: '/img/comp/' + player + '.png',
        isComputer: true,
      });
    });
    const charlie = await Player.create({
      name: 'Charlie',
      imageUrl: '/img/char/mermaid.png',
    });
    const claire = await Player.create({
      name: 'Claire',
      imageUrl: '/img/char/woman-superhero-light.png',
    });
    const daddy = await Player.create({
      name: 'Daddy',
      imageUrl: '/img/char/astronaut.png',
    });
    const mommy = await Player.create({
      name: 'Mommy',
      imageUrl: '/img/char/cherry-blossom.png',
    });
    await Game.create({
      winnerId: charlie.id,
      playerOneId: charlie.id,
      playerTwoId: daddy.id,
      gameData: {
        rounds: '17',
        playerOneScore: 5,
        playerTwoScore: 4,
      },
    });
    await Game.create({
      winnerId: daddy.id,
      playerOneId: daddy.id,
      playerTwoId: charlie.id,
      gameData: {
        rounds: 11,
        playerOneScore: 5,
        playerTwoScore: 2,
      },
    });
  } catch (err) {
    console.log('*>*>*>*> ERROR *>*>*>*>');
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('! Seeding success !');
      db.close();
    })
    .catch((err) => {
      console.error('ERROR: Seeding error.');
      console.error(err);
      db.close();
    });
}
