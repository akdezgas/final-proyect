'use strict';

var express = require('express');
var controller = require('./request.controller');

var router = express.Router();

router.get('/', controller.listRequests);
router.post('/new', controller.createRequest);
router.put('/:id/edit', controller.editRequest);
router.delete('/:id', controller.removeRequest);

module.exports = router;
