const $ = require('jquery');

const helpers = {
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
        method: 'POST',
        url: url,
        data: data,
        success: success,
        error: error,
      });
    });
  },
};
module.exports = helpers;
