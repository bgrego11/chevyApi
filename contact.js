const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', 
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
    question: {
    type: String,
    required: false
    },
}
);

module.exports = Contact