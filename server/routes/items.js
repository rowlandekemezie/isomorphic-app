function routes(router) {
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
  // console.log(items, 'Great day');
  router.route('/items')
    .get((req, res) => res.send(items))
    .post((req, res) => {
      const item = req.body;
      items.push(item);
    });
}
module.exports = routes;
