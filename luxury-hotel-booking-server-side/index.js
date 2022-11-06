const express = require('express');
const cors = require('cors');
const rooms = require('./src/rooms.json');

const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is Running');
});

app.get('/rooms', (req, res) => {
  res.send(rooms);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
