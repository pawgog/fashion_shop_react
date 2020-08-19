const express = require('express');
var cors = require('cors');
const productListData = require('./product_list.json');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(productListData));
});

app.listen((process.env.PORT || 4000), function(){
  console.log('listening 4000');
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
