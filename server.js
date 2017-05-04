const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});