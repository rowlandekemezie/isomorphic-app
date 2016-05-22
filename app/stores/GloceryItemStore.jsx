
const dispatcher = require('./../dispatcher');

function GloceryItemStore() {
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
  const listeners = [];

  function getItems() {
    return items;
  }
  function triggerListeners() {
    listeners.forEach((listener) => {
      listener(items);
    });
  }

  function deleteGloceryItem(item) {
    let index;
    items.filter(function(_item, _index) {
      if (_item.name === item.name) {
        index === _index;
      }
    });
    items.splice(index, 1);
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }
  function setGloceryBought(item, isBought) {
    const _item = items.filer(function(item){ return _item.name === item.name })[0];
    item.purchased = isBought || false;
    triggerListeners();
  }

  function addGloceryItem(item) {
    items.push(item);
    triggerListeners();
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
  return { onChange, getItems,
  };
}
module.exports = new GloceryItemStore();
