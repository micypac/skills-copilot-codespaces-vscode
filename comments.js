// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { name: 'John Doe', comment: 'Hello everyone!' },
  { name: 'Jane Doe', comment: 'Hi!' },
];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Listen to port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
