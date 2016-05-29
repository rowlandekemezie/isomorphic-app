const React = require('react');
const GloceryItem = require('../component/GloceryItem.jsx');
const GloceryListAddItem = require('../component/GloceryListAddItem.jsx');
const GloceryItemList = (props) =>
   (
  <div>
    <h1> GloceryList listify</h1>
    <div>
      {props.items.map((item, index) =>
        <GloceryItem item={item} key={index} />
      )}
    </div>
    <GloceryListAddItem />
  </div>
  );

GloceryItemList.PropTypes = {
  items: React.PropTypes.string,
};

module.exports = GloceryItemList;
