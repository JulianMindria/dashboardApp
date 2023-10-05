const express = require('express');
const router = express.Router();
const ctrl = require('../controller/userController')

router.get('/', ctrl.getUser);
router.get('/:username', ctrl.getUserByUsername);
router.post('/register', ctrl.createUser)
router.post('/login', ctrl.login)

module.exports = router;
