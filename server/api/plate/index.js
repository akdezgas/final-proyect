'use strict';

var express = require('express');
var controller = require('./plate.controller');
const upload = require('../../config/multer');

var router = express.Router();

router.get('/', controller.getAllList);
router.post('/new', upload.single('file'),  controller.createPlate);
router.get('/single/:id', controller.singlePlate);
router.put('/single/:id/edit', upload.single('file'), controller.editPlate);
router.delete('/single/:id/edit', controller.removePlate);

router.get('/:location', controller.listPlates);


module.exports = router;
