const express = require('express');
const controller = require('./auth-routes');

var router = express.Router();

router.get('/' , controller.listUser);
router.post('/login', controller.logIn)
router.post('/signup', controller.signUp);
router.put('/:id/edit', controller.editUser);
router.delete('/:id/edit', controller.removeUser);
router.post('/logout', controller.logOut);
router.get('/loggedin' , controller.logStill);
router.get('/private', controller.private);

module.exports = router;
