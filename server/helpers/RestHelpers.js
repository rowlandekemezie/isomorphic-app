const $ = require('jquery');

module.exports = {
  get: (url) => {
    new Promise ((success, error) => {
      $.ajax({
        url: url,
        dataType: 'json',
        method: 'GET',
        success: success,
        error: error,
      });
    })
  },
   post: (url, data) => {
    new Promise((success, error) => {
      $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: success,
        error: error,
      });
    });
  },
};
