const router = require('express').Router();

router.use('/players', require('./players'));
router.use('/computer', require('./computer'));

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
