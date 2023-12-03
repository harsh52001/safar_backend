const userModel = require('../models/vehicleModel');

class Vehicle{    
    // function to register a user
    static register_post = async (req, res) => {
        const vehicleData = req.body;
        try {
                const newVehicle = new userModel(vehicleData);
                await newVehicle.save();
                res.status(201).json({ message: 'Registration successful' });
        }
        catch (err) {
            res.status(500).json({ error: 'Registration failed' });
        }
    }
}

module.exports = Vehicle;