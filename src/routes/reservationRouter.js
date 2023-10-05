const express = require('express');
const router = express.Router();
const ctrl = require('../controller/reservationController')

router.get('/', ctrl.getRes);
router.get('/', ctrl.getRes);

module.exports = router;