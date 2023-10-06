const express = require('express');
const router = express.Router();
const ctrl = require('../controller/reservationController')

router.get('/', ctrl.getRes);
router.get('/is-booked', ctrl.getAllRes);
router.post('/',ctrl.AddReservation)

module.exports = router;