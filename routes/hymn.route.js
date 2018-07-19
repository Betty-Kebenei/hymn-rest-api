const express = require('express');
const router = express.Router();

const hymn_controller = require('../controllers/hymn.controller');

router.post('/create', hymn_controller.createHymn);

module.exports = router;
