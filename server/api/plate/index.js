'use strict';

var express = require('express');
var controller = require('./plate.controller');

var router = express.Router();

router.get('/', controller.listPlates);
router.post('/new', controller.createPlate);
router.get('/:id', controller.singlePlate)
router.put('/:id/edit', controller.editPlate);
router.delete('/:id/edit', controller.removePlate);

module.exports = router;
