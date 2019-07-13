const express = require('express');
const router = express.Router();

const HotelsControllers = require('./../controllers/HotelsController');

/* GET hotels page. */
router.get('/hotels', HotelsControllers.list);

module.exports = router;
