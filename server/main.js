const express = require('express');
const parser = require('body-parser');

const app = new express();
const router = express.Router();
require('./routes/items')(router);
require('./models/GloceryItem');
require('./database');
// routes(router);
app.get('/', (req, res) => {
  res.render('../app/index.ejs', {});
})
// .get('/*', (req, res) => {
//   res.sendFile(__dirname.concat('./../index.ejs'));
// })
.use(express.static(__dirname.concat('./../.tmp')))
.use(parser.json())
.use(parser.urlencoded({ extended: false }))
.listen(8888);
app.use('/api', router);
