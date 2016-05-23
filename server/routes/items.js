module.exports = function(app) {
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
  app.route('/api/items ')
    .get((req, res) => res.send(items, 'Awesome God. Glory to His name.'))
    .post((req, res) => {
      const item = req.body;
      items.push(item);
    });
};
