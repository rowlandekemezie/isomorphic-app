const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('../app/index.ejs', {});
})
.use(express.static(__dirname.concat('./../.tmp')))
.listen(8888);
