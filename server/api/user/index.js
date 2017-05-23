const express = require('express');
const controller = require('./user.controller');

var router = express.Router();

router.get('/' , controller.listUser);
router.post('/', controller.createUser);
router.put('/:id/edit', controller.editUser);
router.delete('/:id/edit', controller.removeUser);

module.exports = router;
