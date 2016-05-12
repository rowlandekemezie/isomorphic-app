const ReactDOM = require('react-dom');
const React = require('react');
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
const GloceryItemList = require('./component/GloceryItemList.jsx');
ReactDOM.render(<GloceryItemList items={items} />, document.getElementById('app'));
