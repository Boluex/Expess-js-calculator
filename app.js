const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Calculator running on http://localhost:${PORT}`);
});


