// utilities/connectDB.js

const mongoose = require('mongoose');

// Define the MongoDB URI
const mongoURI = 'mongodb+srv://torque061:nOstFbGBRCn5JvVx@cluster0.vqksyrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
const connectToDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling module
    }
};

module.exports = connectToDB;
