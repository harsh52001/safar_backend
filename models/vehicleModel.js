const mongoose = require('mongoose');

// Schema of our database
const VehicleSchema = mongoose.Schema({
    vehicleType: {
        type: String,
        required: true
    },
    vehicleBrand: {
        type: String,
        required: true,
    },
    registration: {
        type: Number,
        required: true,
    },
    sittingCapacity: {
        type: Number,
        required: true
    },
});


// creation of our model
module.exports = mongoose.model('vehicle', VehicleSchema);