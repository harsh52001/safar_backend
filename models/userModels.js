const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema of our database
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        minlength: 10,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    doctype: {
        type: String,
        required: true,
    },
    docid: {
        type: String,
        required: true
    }
});

// hashing the password just before saving in database
userSchema.pre('save', async function () {
    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
    }
    catch (err) {
        throw err;
    }
})

// creation of our model
module.exports = mongoose.model('users', userSchema);