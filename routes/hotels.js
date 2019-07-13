const express = require('express');
const router = express.Router();

const HotelsControllers = require('../controllers/HotelsController');
const validateReq = require('./../validation/hotelReq.validate');


/* GET hotels*/
router.get('/', validateReq, HotelsControllers.list);

module.exports = router;
