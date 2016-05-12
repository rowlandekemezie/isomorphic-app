const React = require('react');

const GloceryItem = (props) =>
  (
  <div>
    <h4 className={props.item.purchased ? 'strikethrough' : ''}>{props.item.name} </h4>
  </div>
  );

GloceryItem.PropTypes = {
  item: React.PropTypes.string,
  purchased: React.PropTypes.bool,
};
module.exports = GloceryItem;
