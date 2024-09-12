// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;  // Ensure PORT is defined

// Middleware to parse JSON and URL-encoded request bodies, as well as to enable cross-origin requests using CORS.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route to render the "home" page using EJS
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page', message: 'Welcome to the Home Page!' });
});

// Create SQLite database
let db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

// Route to get all users
app.get('/users', (req, res) => {
    let sql = `SELECT id, name, email FROM users`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Make sure to close the database connection when the server stops
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit(0);
    });
});