var express = require('express');
var app = express();
const PORT = 8080;
const shortUrl = require('./data/shortUrl');

var cors = require('cors');
 
app.use(cors({
  origin: 'http://localhost:3000/'
}));

app.get('/shortUrl', (req, res) => {
  res.json(shortUrl);
})

app.post('/shortUrl', (req, res) => {
  const newUrl = {
    original: req.body.original,
    short: 'book.yuhu.io/8ac6​'
  }
})
 
app.listen(PORT, () => {
  console.log('Server running at port: ' + PORT);
})