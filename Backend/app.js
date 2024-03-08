// server.js

const express = require('express');
const connectDB = require('./utilities/connectDB');
const userController = require('./routes/userRegistration');
const email = require('./routes/newsRouter')
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Connect to MongoDB
connectDB()
  .then(() => {
    // Use user controller
    app.use('/', userController);
    app.use('/email',email)

    // Start server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit with error
  });
