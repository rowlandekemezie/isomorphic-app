const mongoose = require('mongoose');

const GloceryItemSchema = {
  name: String,
  purchased: Boolean,
  id: String,
};

const GloceryItem = mongoose.model('GloceryItem', GloceryItemSchema, 'gloceryItems');
module.exports = GloceryItem;
