'use strict';

var express = require('express');
var controller = require('./review.controller');

var router = express.Router();

router.get('/' , controller.listReview)
router.post('/', controller.createReview);

module.exports = router;
