const dispatcher = require('../dispatcher');

module.exports = {
  add: (item) => {
    dispatcher.dispatch({
      payload: item,
      type: 'glocery-item:add',
    });
  },
  delete: (item) => {
    dispatcher.dispatch({
      payload: item,
      type: 'glocery-item:delete',
    });
  },
  buy: (item) => {
    dispatcher.dispatch({
      payload: item,
      type: 'glocery-item:buy',
    });
  },
  unbuy: (item) => {
    dispatcher.dispatch({
      payload: item,
      type: 'glocery-item:unbuy',
    });
  },
};
