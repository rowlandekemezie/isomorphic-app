const $ = require('jquery');

module.exports = {
  get: (url) => {
    new Promise((success, error) => {
      $.ajax({
        type: 'GET',
        url: url,
        success: success,
        error: error,
      });
    });
  },
  del: (url) => {
    new Promise((success, error) => {
      $.ajax({
        url: url,
        type: 'DELETE',
        success: success,
        error: error,
      });
    });
  },
  patch: (url, data) => {
    new Promise((success, error) => {
      $.ajax({
        type: 'PATCH',
        data: data,
        url: url,
        success: success,
        error: error,
      });
    });
  },
};
