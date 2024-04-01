// Importing the express library
const express = require('express');

// Creating an instance of express
const app = express();

// Setting the port number
const port = 3000;

// Default result value
let result = -1;

// Listening on the specified port
app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

// Endpoint for flipping a coin
app.get('/coinFlip', (req, res) => {
  // Generating a random number (0 or 1) to represent heads or tails
  const flip = Math.floor(Math.random() * 2);
  // Setting the result based on the flip
  if (flip == 0) {
    result = "Heads";
  } else {
    result = "Tails";
  }
  // Sending the result as JSON response
  res.status(200).json({
    result: result
  });
});

// Endpoint for rolling a dice
app.get('/diceRoll', (req, res) => {
  // Generating a random number between 1 and 6
  const result = Math.floor(Math.random() * 6) + 1;
  // Sending the result as JSON response
  res.status(200).json({
    result: result
  });
});

// Endpoint for generating a random number
app.get('/randomNumber', (req, res) => {
  // Generating a random number between 1 and 100
  const result = Math.floor(Math.random() * 100) + 1;
  // Sending the result as JSON response
  res.status(200).json({
    result: result
  });
});
