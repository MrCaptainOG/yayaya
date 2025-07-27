const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Dummy POST handler to avoid 501
app.post('/profile', (req, res) => {
  res.send(`<h1>Hello ${req.body.username || 'User'}!</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
