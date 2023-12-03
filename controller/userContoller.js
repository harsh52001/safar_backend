const bcrypt = require('bcrypt');
const userModel = require('../models/userModels');

class User{    
    // function to register a user
    static register_post = async (req, res) => {
        const userData = req.body;
        try {
            const existingUser = await userModel.findOne({ email: userData.email });
            if (existingUser) {
                res.status(409).json({ error: 'Email already registered' });
            }
            else {
                const newUser = new userModel(userData);
                await newUser.save();
                res.status(201).json({ message: 'Registration successful' });
            }
        }
        catch (err) {
            res.status(500).json({ error: 'Registration failed' });
        }
    }

    // function to login a user
    static login_post = async (req, res) => {
        const { email, password } = req.body;
        try {
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                // Compare the provided password with the hashed password in the database
                const passwordMatch = await bcrypt.compare(password, existingUser.password);
                if (passwordMatch) {
                    res.status(200).json({ message: 'Login successful', existingUser });
                }
                else {
                    res.status(401).json({ error: 'Password is incorrect' });
                }
            }
            else {
                res.status(404).json({ error: 'Email is incorrect' });
            }
        }
        catch (err) {
            res.status(500).json({ error: 'Login failed' });
        }
    }
}

module.exports = User;