const mongoose = require('mongoose');

const numberSchema = mongoose.Schema({
    numbers:{
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('Numbers', numberSchema);