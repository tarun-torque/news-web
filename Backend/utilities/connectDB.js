// Import mongoose
const mongoose = require('mongoose');

// Define the MongoDB URI
const mongoURI = 'mongodb+srv://torque061:nOstFbGBRCn5JvVx@cluster0.vqksyrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notification of successful connection)
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Export the database connection
module.exports = db;
