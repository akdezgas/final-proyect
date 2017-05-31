'use strict';

var express = require('express');
var controller = require('./request.controller');

var router = express.Router();

router.get('/', controller.getAllRequests);
router.get('/:location', controller.listRequests)
router.get('/:id', controller.singleRequest)
router.post('/new', controller.createRequest);
router.put('/:id/edit', controller.editRequest);
router.delete('/:id/edit', controller.removeRequest);

module.exports = router;
