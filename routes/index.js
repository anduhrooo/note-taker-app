const router = require('express').Router();

const noteRouter = require('./note.js');

router.use('/note', noteRouter);

module.exports = router;