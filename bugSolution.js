const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Add error handling for non-numeric userId
  if (isNaN(userId) || !Number.isInteger(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});