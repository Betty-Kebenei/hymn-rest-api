const express = require('express');
const router = express.Router();

const hymn_controller = require('../controllers/hymn.controller');

router.get('test', hymn_controller.test);

module.exports = router;