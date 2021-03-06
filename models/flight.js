const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN','LAX', 'SAN']
    },
    arrival: Date
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'Den'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 99
    }, 
    departs: {
        type: Date,
        default: function() {
            return newDate().getFullYEar +1;
        }
    },   
    destinations: [destinationSchema] 
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);