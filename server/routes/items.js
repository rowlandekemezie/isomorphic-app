module.exports = function(router) {
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
  router.route('/items ')
    .get((req, res) => res.send(items, 'Awesome God. Glory to His name.'))
    .post((req, res) => {
      const item = req.body;
      items.push(item);
    });
};
