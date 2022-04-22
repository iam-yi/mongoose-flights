const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights');
const ticketCtrl = require('../controllers/tickets');
const destinationCtrl = require('../controllers/destinations');


// GET /movies
router.get('/', flightCtrl.index);                          
// GET /flights/new 
router.get('/new', flightCtrl.new);
router.get('/:id/show', flightCtrl.show);
// POST /flights
router.post('/', flightCtrl.create);
router.post('/:id/tickets/create', ticketCtrl.create);
router.get('/:id/tickets/new', ticketCtrl.new);
router.post('/:id/destinations/create', destinationCtrl.create);

module.exports = router;
