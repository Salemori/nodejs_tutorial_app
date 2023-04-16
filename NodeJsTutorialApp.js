const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 4000;
// Route with request params
app.get('/users/:name/:age/:sex', (req, res) => {
// Create user object
const user = {
    name: req.params.name,
    age: req.params.age,
    sex: req.params.sex
};

  // Add user object to request
  req.user = user;

  // Send response with user object
  res.json(user);
});

// Start server
app.listen(4000, () => console.log(`Server listening on port: ${port}`));