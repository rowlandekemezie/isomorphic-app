const express = require('express');
const parser = require('body-parser');
const routes = require('./routes/items');

const app = express();
const router = express.router();
routes(router);
app.get('/home', (req, res) => {
  res.render('../app/index.ejs', {});
})
// .get('/*', (req, res) => {
//   res.sendFile(__dirname.concat('/index.ejs'));
// })
.use(express.static(__dirname.concat('./../.tmp')))
.use(parser.json())
.use(parser.urlencoded({ extended: false }))
.listen(8888)
.use('/api', router);
// console.log(require('./routes/items')(app), 'app from the index file');
