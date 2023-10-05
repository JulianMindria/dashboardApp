const express = require('express');
const router = express.Router();
const ctrl = require('../controller/parkingspotController')

router.get('/', ctrl.getParkingSpots);

module.exports = router;