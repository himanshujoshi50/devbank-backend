const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend', time: new Date().toISOString() });
});

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from DevBank Backend!' });
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
