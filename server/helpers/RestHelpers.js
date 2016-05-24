const $ = require('jquery');

module.exports = {
  get: (url) => {
    new Promise((success, error) => {
      $.ajax({
        dataType: 'json',
        url: url,
        success: success,
        error: error,
      });
    });
  },
  post: (url, data) => {
    new Promise((success, error) => {
      $.ajax({
        type: 'POST',
        url: url,
        data: data
        success: success,
        error: error,
      });
    });
  },
};
