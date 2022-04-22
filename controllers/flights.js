var Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = { 
    index,
    new: newFlight,
    show,
    create,
};


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { flight, tickets});
        });
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}


function create(req, res) {
    Flight.create(req.body, function(err) {
        res.redirect('/flights');  
    });
}    

function newFlight(req, res) {
    res.render('flights/new', { airline: 'Add Flight' });
}