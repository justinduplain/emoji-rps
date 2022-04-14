const router = require('express').Router();
const { Player, Games } = require('../db');

//  '/api/players/

router.get('/', async function (req, res, next) {
  try {
    const players = await Player.getLivePlayers();
    res.send(players);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async function (req, res, next) {
  try {
    const player = await Player.getPlayer(req.params.id);
    res.send(player);
  } catch (error) {
    next(error);
  }
});
router.post('/', function (req, res, next) {});
router.put('/:playerId', function (req, res, next) {});
router.delete('/:playerId', function (req, res, next) {});

module.exports = router;
