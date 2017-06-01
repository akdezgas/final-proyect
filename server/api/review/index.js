'use strict';

var express = require('express');
var controller = require('./review.controller');
var router = express.Router();
const authChecker = require("../../config/authCheckerMiddleWare");

router.get('/' ,controller.listReview);
router.post('/new', authChecker,controller.createReview);
router.get('/:id',authChecker, controller.getReview);
router.get('/inbox/:id',authChecker, controller.getBox );
router.get('/delete/:id',authChecker, controller.deleteReview)

module.exports = router;
