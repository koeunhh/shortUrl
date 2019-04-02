var express = require('express');
var app = express();
const PORT = 8080;
const bookShowing = require('./data/bookShowing');

var cors = require('cors');
var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/book_showing', (req, res) => {
  res.json(bookShowing);
})

app.get('/book_showing/:id', (req, res) => {
  const id = req.params.id;
  res.json(bookShowing.filter(obj => {
    return obj.original === `https://app.yuhu.io/book_showing?property_id=${id}`
  }));
})

app.post('/book_showing', (req, res) => {
  const newUrl = {
    original: req.body.original,
    short: `book.yuhu.io/${req.body.short}`
  }
  bookShowing.push(newUrl);
  res.json(newUrl);
})
 
app.listen(PORT, () => {
  console.log('Server running at port: ' + PORT);
})