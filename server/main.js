const express = require('express');
const parser = require('body-parser');
const app = new express();
const router = express.Router();
require('./database');

app.get('/', (req, res) => {
  res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname.concat('./../.tmp')))
.use(parser.json())
.use(parser.urlencoded({ extended: false }))
.listen(8888);
require('./routes/items')(router);
app.use('/api', router);
module.exports = app;
