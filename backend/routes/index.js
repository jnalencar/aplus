const express = require('express');
const router = express.Router();

router.use('/movies', require('./movies'));
router.use('/series', require('./series'));

module.exports = router;