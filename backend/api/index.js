// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());

// // Serve the HTML file
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Mock user database
// const users = [
//   { username: 'admin', password: 'password123' },
// ];

// // Login endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   console.log('Received request:', req.body);

//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     res.json({ message: 'Login successful!' });
//   } else {
//     res.status(401).json({ message: 'Invalid username or password.' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock user database
const users = [{ username: 'admin', password: 'password123' }];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received request:', req.body);

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid username or password.' });
  }
});

// Export for Vercel serverless functions
module.exports = app;
