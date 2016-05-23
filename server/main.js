const Express = require('express');
const parser = require('body-parser');

const app = new Express();
app.get('/home', (req, res) => {
  res.render('../app/index.ejs', {});
})
// .get('/*', (req, res) => {
//   res.sendFile(__dirname.concat('/index.ejs'));
// })
.use(Express.static(__dirname.concat('./../.tmp')))
.use(parser.json())
.use(parser.urlencoded({ extended: false }))
.listen(8888);
// console.log(require('./routes/items')(app), 'app from the index file');
// require('./routes/items')(app);
