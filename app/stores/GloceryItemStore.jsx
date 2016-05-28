
const dispatcher = require('./../dispatcher');
const helpers = require('../helpers/RestHelpers');
const $ = require('jquery');

function GloceryItemStore() {
  let items = [];
  const listeners = [];

  function getItems() {
    return items;
  }

  function triggerListeners() {
    listeners.map(listener => listener(items));
  }

  $.get('/api/items').then(data => {
    items = data;
    triggerListeners();
  });

  function deleteGloceryItem(item) {
    let index;
    items.filter(function(_item, _index) {
      if (_item.name === item.name) {
        index === _index;
      }
    });
    items.splice(index, 1);
    triggerListeners();
    helpers.del('/api/items/'.concat(item._id));
  }

  function onChange(listener) {
    listeners.push(listener);
  }
  function setGloceryBought(item, isBought) {
    const _item = items.filter(a => a.name === item.name )[0];
    item.purchased = isBought || false;
    triggerListeners();
    helpers.patch('/api/items/'.concat(item._id), item);
  }

  function addGloceryItem(item) {
    items.push(item);
    triggerListeners();
    $.post('/api/items', item);
  }

  dispatcher.register((event) => {
    const eType = event.type.split(':');
    if (eType[0] === 'glocery-item') {
      switch (eType[1]) {
        case 'add':
          addGloceryItem(event.payload);
          break;
        case 'delete':
          deleteGloceryItem(event.payload);
          break;
        case 'buy':
          setGloceryBought(event.payload, true);
          break;
        case 'unbuy':
          setGloceryBought(event.payload, false);
          break;
        default:
          break;
      }
    }
  });
  return { onChange, getItems };
}
module.exports = new GloceryItemStore();
