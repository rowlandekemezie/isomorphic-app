const GloceryItem = require('./../models/GloceryItem');

module.exports = (router) => {
  router.route('/items')
    .get((req, res) =>
      GloceryItem.find((error, items) => res.send(items)))
    .post((req, res) => {
      const item = req.body;
      const gloceryItem = new GloceryItem(item);
      gloceryItem.save((error, data) => res.status(300).send());
    });
  router.route('/items/:id')
    .delete((req, res) => {
      GloceryItem.findOne({
        _id: req.params.id,
      }).remove(x => console.log(x));
    })
    .patch((req, res) => {
      GloceryItem.findOne({
        _id: req.body._id,
      }, (err, data) => {
        Object.keys(req.body).map(key => (data[key] = req.body[key]));
        data.save();
        res.status(200).send();
      });
    });
};
