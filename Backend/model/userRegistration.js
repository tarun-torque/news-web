const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRegister = new Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userRegister);

module.exports = User;