const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Sample student/product API endpoint
app.get('/api/students', (req, res) => {
  res.json([
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com' },
    { id: 2, name: 'Sam Lee', email: 'sam@example.com' }
  ]);
});

app.post('/api/students', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ errors: ['Invalid email format'] });
  }
  res.status(201).json({ message: 'Student registered successfully' });
});

module.exports = app;