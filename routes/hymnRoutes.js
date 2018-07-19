const express = require('express');
const router = express.Router();

const hymnController = require('../controllers/hymnController');

router.post('/create', hymnController.createHymn);
router.get('', hymnController.fetchAllHymns);
router.get('/:id', hymnController.fetchHymnById);


module.exports = router;
