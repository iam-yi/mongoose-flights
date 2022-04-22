const Tickets = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTickets,
    create
};

function newTickets(req, res) {
        res.render('tickets/new', { flightId: req.params.id });
};

function create(req, res) {
    Flight.findOne({
        _id: req.params.id
    }, function(err, flight) {
        if(err) res.redirect(`/flights/${flight._id}/show`);
        req.body.flight = flight._id;
        var ticket = new Tickets(req.body);
        ticket.save();
        res.redirect(`/flights/${flight._id}/show`);
    });
}