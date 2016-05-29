const express = require('express');
const parser = require('body-parser');
const GloceryItem = require('./models/GloceryItem');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const app = new express();
const router = express.Router();
require('babel/register');
require('./database');
app.get('/', (req, res) => {
  const application = React.createFactory(require('../app/component/GloceryItemList.jsx'));
  GloceryItem.find((error, doc) => {
    const generated = ReactDOMServer.renderToString(application({
      items: doc,
    }));
    res.render('./../app/index.ejs', { reactOutput: generated });
  })
})

.use(express.static(__dirname.concat('./../.tmp')))
.use(parser.json())
.use(parser.urlencoded({ extended: false }))
.listen(3000);
require('./routes/items')(router);
app.use('/api', router);
module.exports = app;
