const mongoose = require('mongoose');

const TradeIn = mongoose.model('TradeIn', 
{
    email: {
        type: String,
        required: true
      },
    name: {
    type: String,
    required: true
    },
    phone: {
        type: Number,
        required: true
      },
    vin: {
    type: String,
    required: false
    },
    make: {
        type: String,
        required: true
      },
    model: {
    type: String,
    required: true
    },
    year: {
        type: Number,
        required: true
      },
    style: {
        type: String,
        required: false
    },
    mileage: {
        type: Number,
        required: true
      },
    zip: {
    type: Number,
    required: false
    },
}
);

module.exports = TradeIn