//Import Express and Create an App Instance for Express module
const express = require('express');
const app = express();

// Set the server Port: 
const port =  process.env.VCAP_APP_PORT || 3001
//API?
app.get('/', (req,res) => {
    console.log("How are you?");
    res.send("Hello World");
});

app.get('/user/:userId', (req,res) => {
    console.log(`params userID is" ${req.params.userId}`);
    res.send(`User ID: ${req.params.userId}`);
});

// Start the server, and log on console to indicate the port
app.listen(port, () => {
    console.log("server is running on port :" + port);
});

console.log("Welcome Team");