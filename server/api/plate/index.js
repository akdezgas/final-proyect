'use strict';

var express = require('express');
var controller = require('./plate.controller');

var router = express.Router();

router.get('/', controller.listPlates);
router.post('/', controller.createPlate);
router.put('/:id/edit', controller.editPlate);
router.delete('/:id', controller.removePlate);

module.exports = router;
