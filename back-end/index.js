var express = require('express');
var app = express();
const PORT = 8080;
const shortUrl = require('./data/shortUrl');

var cors = require('cors');
var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/shortUrl', (req, res) => {
  res.json(shortUrl);
})

app.post('/shortUrl', (req, res) => {
  const newUrl = {
    original: req.body.original,
    short: 'hello'
  }
  shortUrl.push(newUrl);
  res.json(newUrl);
})
 
app.listen(PORT, () => {
  console.log('Server running at port: ' + PORT);
})