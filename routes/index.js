const router = require('express').Router();

const noteRouter = require('./note');

router.use('/note', noteRouter);

module.exports = router;