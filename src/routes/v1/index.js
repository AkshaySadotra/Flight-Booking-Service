const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const bookingRoute = require('./booking-routes')
router.get('/info', InfoController.info);
router.use('/bookings',bookingRoute)

module.exports = router;