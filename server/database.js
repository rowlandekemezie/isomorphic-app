const mongoose = require('mongoose');
const GloceryItem = require('./models/GloceryItem');

mongoose.connect('mongodb://localhost/isomorphic', () => {
  console.log('Really connectd');
  mongoose.connection.db.dropDatabase();
  const items = [{
    name: 'Ice cream',
    purchased: true,
  },
    {
      name: 'Shawarma',
      purchased: true,
    },
    {
      name: 'Burger',
      purchased: false,
    }];
  items.map(item => new GloceryItem(item).save());
});
