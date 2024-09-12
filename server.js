// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Middleware to parse JSON and URL-encoded request bodies, as well as to enable cross-origin requests using CORS.
// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
// Listens on port 3000
// Connects to MongoDB database ironinsight
// NOTE: need to set up DB on machine
mongoose.connect('mongodb://localhost/ironinsight', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch(err => console.log(err));