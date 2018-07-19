const express = require('express');
const router = express.Router();

const hymnController = require('../controllers/hymnController');

router.post('/create', hymnController.createHymn);
router.post('/', hymnController.fetchAllHymns);
router.post('/:id', hymnController.fetchHymnById);


module.exports = router;
