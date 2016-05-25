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
};
