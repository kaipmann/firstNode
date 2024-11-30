// Import Express and Create an App Instance
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set the server port
const port = 3001;

// Root route (GET)
app.get('/', (req, res) => {
    console.log("How are you?");
    res.send("Hello World");
});

// User route (GET)
app.get('/user/:userId', (req, res) => {
    console.log(`params userID is: ${req.params.userId}`);
    res.send(`User ID: ${req.params.userId}`);
});

// User route (POST)
app.post('/user', (req, res) => {
    const userId = req.body.userId;
    console.log(`Received userID: ${userId}`);
    res.send(`Received User ID: ${userId}`);
});

// Start the server and log the port
app.listen(port, () => {
    console.log("server is running on port: " + port);
});

console.log("Welcome Team");
